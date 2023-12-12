import React from "react";
import * as NextImage from "next/legacy/image";

export interface ImageProps {
  src: string;
  alt: string;
  layout?: "fill" | "fixed" | "intrinsic" | "responsive";
  width?: number | string;
  height?: number | string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  layout = "fill",
  width,
  height,
}: ImageProps) => {
  return (
    <NextImage.default
      src={src}
      alt={alt}
      title={alt}
      layout={layout}
      width={width}
      height={height}
    />
  );
};

export default Image;
