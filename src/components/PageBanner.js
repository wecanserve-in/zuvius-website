import "./PageBanner.css";

const PageBanner = ({
  image,
  title,
  description,
  alt = "",
  className = "",
}) => {
  const isVideo =
    image &&
    (image.endsWith(".mp4") ||
      image.endsWith(".webm") ||
      image.endsWith(".mov"));

  return (
    <section className={`page-banner ${className}`} data-banner={className}>
      <div className="page-banner-content">
        <h1>{title}</h1>
        <div className="page-banner-line"></div>
        {description && <p>{description}</p>}
      </div>

      <div className="page-banner-media">
        {isVideo ? (
          <video
            className="page-banner-image"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={image} type="video/mp4" />
          </video>
        ) : (
          <img
            src={image}
            alt={alt || "Page banner"}
            className="page-banner-image"
          />
        )}
      </div>
    </section>
  );
};

export default PageBanner;