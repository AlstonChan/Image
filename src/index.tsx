import React, { CSSProperties } from "react";

import type { StaticImageData } from "next/image";

export interface Props {
  src: string | StaticImageData;
  alt: string;
  w?: string | number;
  h?: string | number;
  responsive?: boolean;
  srcSet?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  imgRef?: React.MutableRefObject<null | HTMLImageElement>;
  style?: CSSProperties;
}

export default function Image(props: Props) {
  const {
    src,
    alt,
    w = "",
    h = "",
    responsive = true,
    srcSet = "",
    sizes = "",
    className = "",
    priority = false,
    imgRef = null,
    style = {},
  } = props;

  let css = {};
  let source;
  let width = w;
  let height = h;
  const responsiveWidth = { width: "100%", height: "auto" };

  if (src == "" || src == null) {
    const errorMsg = `Image src value is invalid and cannot be empty or null.`;
    throw new Error(errorMsg);
  }

  if (!width && !height) {
    if (responsive) css = { ...responsiveWidth, ...style };
  } else {
    css = { ...style };
  }

  if (typeof priority !== "boolean") {
    const errorMsg = `Value inserted to priority is using ${typeof priority} instead of boolean type, which may lead to unexpected outcome.`;
    throw new Error(errorMsg);
  }

  if (typeof src === "object") {
    source = src.src;

    if (!w) width = src.width;
    if (!h) height = src.height;
  } else source = src;

  return (
    <img
      src={source}
      alt={alt}
      className={className}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      width={width}
      height={height}
      style={css}
      srcSet={srcSet}
      sizes={sizes}
      ref={imgRef}
    />
  );
}
