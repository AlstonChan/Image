import React, { CSSProperties } from "react";

export interface Props {
  src: string;
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
  const responsiveWidth = { width: "100%", height: "auto" };

  if (src == "" || src == null) {
    const errorMsg = `Image src value is invalid and cannot be empty or null.`;
    console.error(errorMsg);
  }

  if (!w || responsive) {
    css = { ...responsiveWidth, ...style };
  } else css = { ...style };

  if (typeof priority !== "boolean") {
    const errorMsg = `Value inserted to priority is using ${typeof priority} instead of boolean type, which may lead to unexpected outcome.`;
    console.error(errorMsg);
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      width={w}
      height={h}
      style={css}
      srcSet={srcSet}
      sizes={sizes}
      ref={imgRef}
    />
  );
}
