import "./PageBanner.css";

const PageBanner = ({
  image,
  title,
  description,
  alt = "",
}) => {
  return (
    <section className="page-banner">
      <img
        src={image}
        alt={alt || title}
        className="page-banner-image"
      />

      <div className="page-banner-content">
        <h1>{title}</h1>

        <div className="page-banner-line"></div>

        <p>{description}</p>
      </div>
    </section>
  );
};

export default PageBanner;