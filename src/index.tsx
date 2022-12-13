import React, { CSSProperties } from "react";

export interface Props {
  src: string;
  alt: string;
  w?: string;
  h?: string;
  responsive?: boolean;
  srcSet?: string;
  sizes?: string;
  className?: string;
  objFit?: string;
  objPos?: string;
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
    objFit = "",
    objPos = "",
    priority = false,
    imgRef = null,
    style = {},
  } = props;

  let css = {};
  const responsiveWidth = { width: "100%", height: "auto" };

  const noSemiColons = (sty: string): boolean => {
    if (sty.includes(";")) {
      const errorMsg =
        "Warning: Style property values shouldn't contain a semicolon.";
      console.error(errorMsg);
      return false;
    }
    return true;
  };

  if (src == "" || src == null) {
    const errorMsg = `Image src value is invalid and cannot be empty or null.`;
    console.error(errorMsg);
  }

  if (!w || responsive) {
    css = { ...style, ...responsiveWidth };
  } else css = { ...style };

  if (objFit) {
    const objFitPossibleValue = [
      "contain",
      "cover",
      "fill",
      "none",
      "scale-down",
    ];

    const objFitValueFound = objFitPossibleValue.find(
      (element) => element === objFit
    );
    if (noSemiColons(objFit)) {
      if (objFitValueFound) {
        css = { ...style, ...css, objectFit: objFit };
      } else {
        const errorMsg =
          "Value inserted to objFit is invalid, please refer to https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit.";
        console.error(errorMsg);
      }
    }
  }

  if (objPos) {
    if (noSemiColons(objPos))
      css = { ...style, ...css, objectPosition: objPos };
  }

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
