export interface Props {
  src: string;
  alt: string;
  w?: string;
  className?: string;
  objFit?: string;
  objOps?: string;
  priority?: boolean;
}

export default function Image(props: Props) {
  const { src, alt, w, className, objFit, objOps, priority = false } = props;

  let style = {};
  const responsiveWidth = { width: "100%", height: "auto" };

  if (!w) {
    style = { ...responsiveWidth };
  } else style = {};

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

    if (objFitValueFound) {
      style = { ...style, objectFit: objFit };
    } else {
      const errorMsg =
        "Value inserted to objFit is invalid, please refer to https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit";
      console.error(errorMsg);
    }
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      width={w}
      style={style}
    />
  );
}
