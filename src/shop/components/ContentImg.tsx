import { useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import "react-inner-image-zoom/lib/styles.min.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
interface Props {
  source: string;
  height: string;
}

export const ContentImg = ({ source, height }: Props) => {
  const [zoomed, setZoomed] = useState(false);
  return (
    <>
      {/* Imagen miniatura */}
      <img
        src={source}
        alt=""
        className={`object-cover rounded-sm cursor-pointer ${height}`}
        onClick={() => setZoomed(true)}
      />
      {zoomed &&
        createPortal(
          <div className="fixed inset-0 z-[90] bg-gray-200 bg-opacity-90 flex items-center justify-center pointer-events-auto">
            <div
              className="absolute w-[40px] h-[40px] bg-black text-white rounded-full top-2 left-2  z-[100] pointer-events-auto flex items-center justify-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setZoomed(false);
              }}
            >
              <IoMdClose size={20} />
            </div>
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={8}
              centerOnInit
            >
              <TransformComponent>
                <img
                  src={source}
                  alt="test"
                  className="max-w-full max-h-screen object-contain"
                />
              </TransformComponent>
            </TransformWrapper>
          </div>,
          document.body
        )}
    </>
  );
};
