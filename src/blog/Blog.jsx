import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import blogs from "./blogdata";
import "./blog.css";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(blogs.map((blog) => blog.category).filter(Boolean)),
    ];
    return ["All", ...uniqueCategories];
  }, []);

  // Sort newest first by date (fallback to ID descending)
  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (!isNaN(dateA) && !isNaN(dateB)) {
        return dateB - dateA;
      }
      return b.id - a.id;
    });
  }, []);

  // Filter based on active category
  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") return sortedBlogs;
    return sortedBlogs.filter((blog) => blog.category === activeCategory);
  }, [activeCategory, sortedBlogs]);

  const getCardCategoryClass = (category) => {
    if (category === "Product") return "product-blog-card";
    if (category === "Cancer") return "cancer-blog-card";
    if (category === "Zuvius") return "zuvius-blog-card";
    return "";
  };

  return (
    <main className="blog-page">
      <PageBanner
        title="Blogs"
        image="/blog-banner.png"
        alt="Zuvius Lifesciences Blogs"
        className="blog-page-banner"
      />

      <section className="blog-container">
        <div className="blog-intro">
          <h2>
            Insights from <span>Zuvius Lifesciences</span>
          </h2>
          <p>
            Explore perspectives and educational guides across oncology,
            pharmaceutical innovation, healthcare, and cancer treatments.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="blog-categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`blog-category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* RESULT COUNT */}
        <div className="blog-results-header">
          <span>
            {filteredBlogs.length}{" "}
            {filteredBlogs.length === 1 ? "Article" : "Articles"}
          </span>
        </div>

        {/* ALL BLOGS GRID */}
        {filteredBlogs.length > 0 ? (
          <div className="blog-grid">
            {filteredBlogs.map((blog) => (
              <article
                className={`blog-card ${getCardCategoryClass(blog.category)}`}
                key={blog.id}
              >
                {/* Clicking image opens the blog article */}
                <Link to={`/blog/${blog.slug}`} className="blog-card-image">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className={blog.imageClass || ""}
                  />
                </Link>

                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-category-label">
                      {blog.category}
                    </span>
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>

                  {/* Title strictly opens the blog article */}
                  <h3 className="blog-card-title">
                    <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h3>

                  <p>{blog.excerpt}</p>

                  <div className="blog-card-actions">
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="blog-read-more"
                    >
                      Read Article <span>→</span>
                    </Link>

                    {/* PRODUCT DIRECT LINK */}
                    {blog.category === "Product" && blog.targetUrl && (
                      <Link
                        to={blog.targetUrl}
                        className="blog-direct-link"
                      >
                        Explore Product ↗
                      </Link>
                    )}

                    {/* CANCER DIRECT LINK */}
                    {blog.category === "Cancer" && blog.targetUrl && (
                      <Link
                        to={blog.targetUrl}
                        className="blog-direct-link"
                      >
                        View Cancer Page ↗
                      </Link>
                    )}

                    {/* ZUVIUS DIRECT LINK TO ABOUT US */}
                    {blog.category === "Zuvius" && (
                      <Link
                        to={blog.targetUrl || "/aboutus"}
                        className="blog-direct-link"
                      >
                        About Us ↗
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <h3>No articles found</h3>
            <p>There are currently no blogs in this category.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Blog;