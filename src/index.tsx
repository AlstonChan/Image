import "./styles.css";

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
  placeholder?: string | StaticImageData;
}

export default function Image(props: Props) {
  const {
    src,
    alt,
    w = "",
    h = "",
    srcSet = "",
    sizes = "",
    className = "",
    priority = false,
    imgRef = null,
    style = {},
    placeholder,
  } = props;
  let { responsive } = props;
  let userResponsiveness = responsive;

  console.log(style);

  // Have responsive "true" as default value
  if (typeof responsive === undefined) {
    responsive = true;
  }

  let css = {};
  let source;
  let width = w;
  let height = h;
  const responsiveWidth = { width: "100%", height: "auto" };

  if (src == "" || src == null) {
    const errorMsg = `Image src value is invalid and cannot be empty or null.`;
    throw new Error(errorMsg);
  }

  // default responsive to false if width or height is set
  if (width || height) responsive = false;

  if (userResponsiveness) responsive = true;

  if (!width && !height) {
    // if height and width are not defined, use responsive width
    if (responsive) {
      css = { ...responsiveWidth, ...style };
    } else css = { ...style };
    // even if width and height is set, if responsive is true, set responsive width
  } else if (responsive) {
    css = { ...responsiveWidth, ...style };
  } else {
    css = { ...style };
  }

  if (placeholder) {
    if (typeof placeholder === "object") {
      css = { ...css, background: `url(${placeholder.src})` };
    } else css = { ...css, backgroundImage: `url(${placeholder})` };
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
      className={`default ${className}`}
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
