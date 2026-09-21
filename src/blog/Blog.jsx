import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import blogs from "./blogdata";
import "./blog.css";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        blogs
          .map((blog) => blog.category)
          .filter(Boolean)
      ),
    ];

    return ["All", ...uniqueCategories];
  }, []);

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter(
          (blog) => blog.category === activeCategory
        );

  const featuredBlog =
    activeCategory === "All"
      ? blogs.find((blog) => blog.featured) || blogs[0]
      : filteredBlogs.find((blog) => blog.featured) ||
        filteredBlogs[0];

  const latestBlogs = filteredBlogs
    .filter(
      (blog) => blog.id !== featuredBlog?.id
    )
    .slice(0, 6);

  const getCardCategoryClass = (category) => {
    if (category === "Product") return "product-blog-card";
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
          <span className="blog-section-label">
            ZUVIUS INSIGHTS
          </span>

          <h2>
            Insights from <span>Zuvius Lifesciences</span>
          </h2>

          <p>
            Explore perspectives on oncology, pharmaceutical
            innovation, healthcare and the science shaping
            tomorrow's treatments.
          </p>
        </div>

        {/* CATEGORY FILTER */}
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

        {/* FEATURED ARTICLE */}
        {featuredBlog && (
          <section className="featured-blog-section">
            <div className="blog-section-heading">
              <div>
                <span>FEATURED ARTICLE</span>
                <h3>What we're reading</h3>
              </div>

              <Link to="/blog/all" className="view-all-blogs">
                View All Blogs
                <span>→</span>
              </Link>
            </div>

            <article
              className={`featured-blog-card ${getCardCategoryClass(
                featuredBlog.category
              )}`}
            >
              <Link
                to={`/blog/${featuredBlog.slug}`}
                className="featured-blog-image"
              >
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                />
              </Link>

              <div className="featured-blog-content">
                <div className="blog-meta">
                  <span className="blog-category-label">
                    {featuredBlog.category}
                  </span>
                  <span>{featuredBlog.date}</span>
                  <span>{featuredBlog.readTime}</span>
                </div>

                <h3>{featuredBlog.title}</h3>
                <p>{featuredBlog.excerpt}</p>

                <Link
                  to={`/blog/${featuredBlog.slug}`}
                  className="blog-read-more"
                >
                  Read Article
                  <span>→</span>
                </Link>
              </div>
            </article>
          </section>
        )}

        {/* LATEST INSIGHTS */}
        {latestBlogs.length > 0 && (
          <section className="latest-blog-section">
            <div className="blog-section-heading">
              <div>
                <span>LATEST INSIGHTS</span>
                <h3>Explore our latest articles</h3>
              </div>
            </div>

            <div className="blog-grid">
              {latestBlogs.map((blog) => (
                <article
                  className={`blog-card ${getCardCategoryClass(
                    blog.category
                  )}`}
                  key={blog.id}
                >
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="blog-card-image"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                    />
                  </Link>

                  <div className="blog-card-content">
                    <div className="blog-meta">
                      <span className="blog-category-label">
                        {blog.category}
                      </span>
                      <span>{blog.date}</span>
                    </div>

                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>

                    <Link
                      to={`/blog/${blog.slug}`}
                      className="blog-read-more"
                    >
                      Read Article
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {filteredBlogs.length === 0 && (
          <div className="blog-empty">
            <h3>More insights coming soon</h3>
            <p>New articles and insights will be published here.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Blog;