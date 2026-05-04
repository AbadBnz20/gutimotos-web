import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
interface ImageViewerProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

function useGestures(
  onPinch: (delta: number, cx: number, cy: number) => void,
  onPan: (dx: number, dy: number) => void,
  onSwipe: (dir: "left" | "right") => void,
) {
  const state = useRef({ touches: [] as Touch[], startDist: 0, startX: 0 });

  const onTouchStart = useCallback((e: TouchEvent) => {
    const t = Array.from(e.touches);
    state.current.touches = t;
    if (t.length === 2) {
      state.current.startDist = Math.hypot(
        t[1].clientX - t[0].clientX,
        t[1].clientY - t[0].clientY,
      );
    } else if (t.length === 1) {
      state.current.startX = t[0].clientX;
    }
  }, []);

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();
      const t = Array.from(e.touches);
      if (t.length === 2 && state.current.startDist) {
        const dist = Math.hypot(
          t[1].clientX - t[0].clientX,
          t[1].clientY - t[0].clientY,
        );
        const cx = (t[0].clientX + t[1].clientX) / 2;
        const cy = (t[0].clientY + t[1].clientY) / 2;
        onPinch(dist / state.current.startDist, cx, cy);
        state.current.startDist = dist;
      } else if (t.length === 1 && state.current.touches.length === 1) {
        const prev = state.current.touches[0];
        onPan(t[0].clientX - prev.clientX, t[0].clientY - prev.clientY);
        state.current.touches = t;
      }
    },
    [onPinch, onPan],
  );

  const onTouchEnd = useCallback(
    (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - state.current.startX;
      if (Math.abs(dx) > 60 && state.current.touches.length === 1) {
        onSwipe(dx < 0 ? "left" : "right");
      }
      state.current.touches = [];
    },
    [onSwipe],
  );

  return { onTouchStart, onTouchMove, onTouchEnd };
}

// Componente principal del visor
export const ImageViewer = ({
  images,
  initialIndex = 0,
  onClose,
}: ImageViewerProps) => {
  const [index, setIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const clampScale = (s: number) => Math.min(8, Math.max(0.5, s));

  const resetTransform = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const goTo = (i: number) => {
    const next = (i + images.length) % images.length;
    setIndex(next);
    resetTransform();
  };

  // Wheel zoom (desktop)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      setScale((s) => clampScale(s - e.deltaY * 0.002));
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const { onTouchStart, onTouchMove, onTouchEnd } = useGestures(
    (delta) => setScale((s) => clampScale(s * delta)),
    (dx, dy) => {
      if (scale > 1) setOffset((o) => ({ x: o.x + dx, y: o.y + dy }));
    },
    (dir) => {
      if (scale === 1) goTo(dir === "left" ? index + 1 : index - 1);
    },
  );

  const bindTouch = {
    onTouchStart: (e: React.TouchEvent) => onTouchStart(e.nativeEvent),
    onTouchMove: (e: React.TouchEvent) => onTouchMove(e.nativeEvent),
    onTouchEnd: (e: React.TouchEvent) => onTouchEnd(e.nativeEvent),
  };

  return createPortal(
    <div
      ref={containerRef}
      className="fixed inset-0 z-[50] bg-black/95 flex items-center justify-center touch-none select-none pointer-events-auto"
      {...bindTouch}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[100] bg-black/60 border border-white/30 text-white rounded-full w-10 h-10 cursor-pointer text-xl flex items-center justify-center pointer-events-auto shadow-lg"
      >
        <IoClose />
      </button>

      {/* Contador */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/80 text-[13px]">
        {index + 1} / {images.length}
      </div>

      {/* Flechas */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => goTo(index - 1)}
            className="absolute left-4 z-[100] bg-black/60 border border-white/30 text-white rounded-full w-11 h-11 cursor-pointer text-xl flex items-center justify-center shadow-lg pointer-events-auto"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            className="absolute right-4 z-[100] bg-black/60 border border-white/30 text-white rounded-full w-11 h-11 cursor-pointer text-xl flex items-center justify-center shadow-lg pointer-events-auto"
          >
            <FaAngleRight />
          </button>
        </>
      )}

      {/* Imagen */}
      <img
        src={images[index]}
        alt=""
        onDoubleClick={resetTransform}
        className={`max-w-[100vw] max-h-screen object-contain pointer-events-none ${
          scale > 1 ? "cursor-grab" : "cursor-zoom-in"
        }`}
        style={{
          transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
          transformOrigin: "center",
          transition: scale === 1 ? "transform 0.2s" : "none",
        }}
      />

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-200"
              style={{
                width: i === index ? 20 : 8,
                background: i === index ? "#fff" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      )}
    </div>,
    document.body,
  );
};
