import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import blogs from "./blogdata";
import "./blogall.css";

const BlogAll = () => {
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

  return (
    <main className="blog-all-page">

      {/* =====================================================
          PAGE BANNER
      ===================================================== */}

      <PageBanner
        title="All Blogs"
        image="/blog-banner.png"
        alt="Zuvius Lifesciences Blogs"
        className="blog-page-banner"
      />


      <section className="blog-all-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="blog-all-header">

          <span className="blog-section-label">
            ZUVIUS INSIGHTS
          </span>

          <h1>
            Explore Our <span>Blogs</span>
          </h1>

          <p>
            Explore insights, perspectives and information
            across oncology, healthcare, pharmaceuticals,
            products and more.
          </p>

        </div>


        {/* =====================================================
            CATEGORY FILTER
        ===================================================== */}

        <div className="blog-categories">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`blog-category-btn ${
                activeCategory === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}

        </div>


        {/* =====================================================
            RESULT COUNT
        ===================================================== */}

        <div className="blog-results-header">

          <span>
            {filteredBlogs.length}{" "}
            {filteredBlogs.length === 1
              ? "Article"
              : "Articles"}
          </span>

        </div>


        {/* =====================================================
            ALL BLOGS
        ===================================================== */}

        {filteredBlogs.length > 0 ? (

          <div className="blog-all-grid">

            {filteredBlogs.map((blog) => (

              <article
                className={`blog-all-card ${
                  blog.category === "Product"
                    ? "product-blog-card"
                    : ""
                }`}
                key={blog.id}
              >

                <Link
                  to={`/blog/${blog.slug}`}
                  className="blog-all-card-image"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                  />
                </Link>


                <div className="blog-all-card-content">

                  <div className="blog-meta">

                    <span className="blog-category-label">
                      {blog.category}
                    </span>

                    <span>
                      {blog.date}
                    </span>

                    <span>
                      {blog.readTime}
                    </span>

                  </div>


                  <h2>
                    {blog.title}
                  </h2>


                  <p>
                    {blog.excerpt}
                  </p>


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

        ) : (

          <div className="blog-empty">

            <h3>
              No articles found
            </h3>

            <p>
              There are currently no blogs in this
              category.
            </p>

          </div>

        )}

      </section>

    </main>
  );
};

export default BlogAll;