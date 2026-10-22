import { Link } from "react-router-dom";
import useSEO from "../seo/useSEO";
import { NOT_FOUND_SEO } from "../seo/seoConfig";
import "./NotFound.css";

export default function NotFound() {
  // noindex keeps wrong addresses out of Google's results.
  useSEO(NOT_FOUND_SEO);

  return (
    <section className="not-found">
      <p className="not-found-code">404</p>
      <h1>Page not found</h1>
      <p className="not-found-text">
        The page you are looking for may have moved or no longer exists.
      </p>
      <div className="not-found-links">
        <Link to="/" className="not-found-primary">
          Go to homepage
        </Link>
        <Link to="/products">Our products</Link>
        <Link to="/types-of-cancer">Types of cancer</Link>
        <Link to="/contact">Contact us</Link>
      </div>
    </section>
  );
}
