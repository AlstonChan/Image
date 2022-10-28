export interface Props {
  src: string;
  alt: string;
  w?: string;
  className?: string;
  objFit?: string;
  objPos?: string;
  priority?: boolean;
}

export default function Image(props: Props) {
  const { src, alt, w, className, objFit, objPos, priority = false } = props;

  let style = {};
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

  if (!alt) {
    const errorMsg = `You should supply a descriptive text for the image, or put as empty("") for decorative image.`;
    console.error(errorMsg);
  }

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
    if (noSemiColons(objFit)) {
      if (objFitValueFound) {
        style = { ...style, objectFit: objFit };
      } else {
        const errorMsg =
          "Value inserted to objFit is invalid, please refer to https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit.";
        console.error(errorMsg);
      }
    }
  }

  if (objPos) {
    if (noSemiColons(objPos)) style = { ...style, objectPosition: objPos };
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
      style={style}
    />
  );
}
