import { useState } from "react";
import "react-inner-image-zoom/lib/styles.min.css";
import { ImageViewer } from "./ImageViewer";
interface Props {
  images: string[];
  height: string;
  initialIndex?: number;
}

export const ContentImg = ({ images, height, initialIndex = 0 }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <img
        src={images[initialIndex]}
        alt=""
        className={`object-cover rounded-sm cursor-pointer ${height}`}
        onClick={() => setOpen(true)}
      />
      {open && (
        <ImageViewer
          images={images}
          initialIndex={initialIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};
