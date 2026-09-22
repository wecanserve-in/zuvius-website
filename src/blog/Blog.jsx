import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import blogs from "./blogdata";
import "./blog.css";

const Blog = () => {
  const featuredBlog = blogs.find((blog) => blog.featured) || blogs[0];

  const latestBlogs = blogs
    .filter((blog) => blog.id !== featuredBlog?.id)
    .slice(0, 6);

  const getCardCategoryClass = (category) => {
    if (category === "Product") return "product-blog-card";
    if (category === "Cancer") return "cancer-blog-card";
    if (category === "Zuvius") return "zuvius-blog-card";
    return "";
  };

  const getTargetOrBlogUrl = (blog) => {
    return blog.targetUrl || `/blog/${blog.slug}`;
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
            Explore perspectives on oncology, pharmaceutical innovation,
            healthcare and the science shaping tomorrow's treatments.
          </p>
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
                  className={featuredBlog.imageClass || ""}
                />
              </Link>

              <div className="featured-blog-content">
                <div className="blog-meta">
                  {featuredBlog.targetUrl ? (
                    <Link
                      to={featuredBlog.targetUrl}
                      className="blog-category-label"
                    >
                      {featuredBlog.category}
                    </Link>
                  ) : (
                    <span className="blog-category-label">
                      {featuredBlog.category}
                    </span>
                  )}
                  <span>{featuredBlog.date}</span>
                  <span>{featuredBlog.readTime}</span>
                </div>

                <h3 className="blog-card-title">
                  <Link to={getTargetOrBlogUrl(featuredBlog)}>
                    {featuredBlog.title}
                  </Link>
                </h3>

                <p>{featuredBlog.excerpt}</p>

                <div className="blog-card-actions">
                  <Link
                    to={`/blog/${featuredBlog.slug}`}
                    className="blog-read-more"
                  >
                    Read Article
                    <span>→</span>
                  </Link>

                  {featuredBlog.category === "Product" && featuredBlog.targetUrl && (
                    <Link
                      to={featuredBlog.targetUrl}
                      className="blog-direct-link"
                    >
                      Explore Product ↗
                    </Link>
                  )}

                  {featuredBlog.category === "Cancer" && featuredBlog.targetUrl && (
                    <Link
                      to={featuredBlog.targetUrl}
                      className="blog-direct-link"
                    >
                      View Cancer Page ↗
                    </Link>
                  )}
                </div>
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
                  className={`blog-card ${getCardCategoryClass(blog.category)}`}
                  key={blog.id}
                >
                  <Link to={`/blog/${blog.slug}`} className="blog-card-image">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className={blog.imageClass || ""}
                    />
                  </Link>

                  <div className="blog-card-content">
                    <div className="blog-meta">
                      {blog.targetUrl ? (
                        <Link
                          to={blog.targetUrl}
                          className="blog-category-label"
                        >
                          {blog.category}
                        </Link>
                      ) : (
                        <span className="blog-category-label">
                          {blog.category}
                        </span>
                      )}
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="blog-card-title">
                      <Link to={getTargetOrBlogUrl(blog)}>{blog.title}</Link>
                    </h3>

                    <p>{blog.excerpt}</p>

                    <div className="blog-card-actions">
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="blog-read-more"
                      >
                        Read Article
                        <span>→</span>
                      </Link>

                      {blog.category === "Product" && blog.targetUrl && (
                        <Link
                          to={blog.targetUrl}
                          className="blog-direct-link"
                        >
                          Explore Product ↗
                        </Link>
                      )}

                      {blog.category === "Cancer" && blog.targetUrl && (
                        <Link
                          to={blog.targetUrl}
                          className="blog-direct-link"
                        >
                          View Cancer Page ↗
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* PROMINENT "VIEW ALL BLOGS" BUTTON BELOW THE GRID */}
            <div className="blog-bottom-view-all">
              <Link to="/blog/all" className="blog-view-all-btn">
                View All Articles <span>→</span>
              </Link>
            </div>
          </section>
        )}

        {blogs.length === 0 && (
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