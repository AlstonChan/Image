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

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      width={w}
      style={!w ? { width: "100%", height: "auto" } : {}}
    />
  );
}
