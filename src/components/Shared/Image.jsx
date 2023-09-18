const Image = ({ src, alt, type, style, containerStyle, ...props }) => {
  return (
    <picture style={containerStyle}>
      <source srcSet={src} type={type} />
      <img src={src} alt={alt} style={style} {...props} />
    </picture>
  );
};

export default Image;
