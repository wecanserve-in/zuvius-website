import { Link, useParams } from "react-router-dom";
import blogs from "./blogdata";
import "./blogdetail.css";

const BlogDetail = () => {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="blog-detail-page">
        <section className="blog-detail-container">
          <div className="blog-not-found">
            <h1>Article Not Found</h1>
            <p>The article you are looking for could not be found.</p>
            <Link to="/blog" className="blog-back-button">
              ← Back to Blogs
            </Link>
          </div>
        </section>
      </main>
    );
  }

  // Strictly only articles from the same category
  const relatedBlogs = blogs
    .filter(
      (item) => item.slug !== blog.slug && item.category === blog.category
    )
    .slice(0, 3);

  return (
    <main
      className={`blog-detail-page ${
        blog.category === "Product"
          ? "product-blog-detail"
          : blog.category === "Cancer"
          ? "cancer-blog-detail"
          : blog.category === "Zuvius"
          ? "zuvius-blog-detail"
          : ""
      }`}
    >
      <section className="blog-detail-container">
        <div className="blog-detail-layout">
          {/* ARTICLE */}
          <article className="blog-article">
            <div className="blog-article-top">
              <div className="blog-detail-meta">
                {blog.targetUrl ? (
                  <Link
                    to={blog.targetUrl}
                    className="blog-detail-category"
                  >
                    {blog.category}
                  </Link>
                ) : (
                  <span className="blog-detail-category">
                    {blog.category}
                  </span>
                )}
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>

              <h1>{blog.title}</h1>

              <p className="blog-detail-excerpt">{blog.excerpt}</p>

              <div className="blog-author">
                By <strong>{blog.author}</strong>
              </div>
            </div>

            {/* FEATURE IMAGE WITH INDIVIDUAL IMAGECLASS */}
            {blog.image && (
              <div className="blog-detail-feature-image">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className={blog.imageClass || ""}
                />
              </div>
            )}

            {/* PRODUCT CTA BANNER */}
            {blog.category === "Product" && blog.targetUrl && (
              <div className="blog-action-banner">
                <div className="blog-action-text">
                  <strong>Looking for Acalataz 100 Specifications?</strong>
                  <span>
                    View clinical efficacy, packaging, and submit an enquiry on the official product page.
                  </span>
                </div>
                <Link to={blog.targetUrl} className="blog-action-btn">
                  Explore Product ↗
                </Link>
              </div>
            )}

            {/* CANCER CTA BANNER */}
            {blog.category === "Cancer" && blog.targetUrl && (
              <div className="blog-action-banner">
                <div className="blog-action-text">
                  <strong>Need More Details on This Cancer Type?</strong>
                  <span>
                    Explore comprehensive symptoms, stages, risk factors, and treatments in our Cancer Guide.
                  </span>
                </div>
                <Link to={blog.targetUrl} className="blog-action-btn">
                  View Cancer Page ↗
                </Link>
              </div>
            )}

            {/* ARTICLE CONTENT */}
            <div className="blog-article-content">
              {blog.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return <p key={index}>{block.text}</p>;
                }

                if (block.type === "heading") {
                  return <h2 key={index}>{block.text}</h2>;
                }

                if (block.type === "list") {
                  return (
                    <ul key={index}>
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === "infoTable") {
                  return (
                    <div className="blog-info-table-wrapper" key={index}>
                      <table className="blog-info-table">
                        <tbody>
                          {block.items.map((item, itemIndex) => (
                            <tr key={itemIndex}>
                              <th>{item.label}</th>
                              <td>{item.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                if (block.type === "faq") {
                  return (
                    <div className="blog-faq" key={index}>
                      <h3>{block.question}</h3>
                      <p>{block.answer}</p>
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* BOTTOM ACTION BANNER FOR PRODUCT */}
            {blog.category === "Product" && blog.targetUrl && (
              <div className="blog-action-banner bottom">
                <div className="blog-action-text">
                  <strong>Acalataz 100 Commercial Enquiries</strong>
                  <span>
                    Get in touch with Zuvius Lifesciences for bulk and institutional supply.
                  </span>
                </div>
                <Link to={blog.targetUrl} className="blog-action-btn">
                  Go to Product Page →
                </Link>
              </div>
            )}

            {/* BOTTOM ACTION BANNER FOR CANCER */}
            {blog.category === "Cancer" && blog.targetUrl && (
              <div className="blog-action-banner bottom">
                <div className="blog-action-text">
                  <strong>Comprehensive Cancer Care Overview</strong>
                  <span>
                    Review our specialized guides and diagnostic pathways for this cancer type.
                  </span>
                </div>
                <Link to={blog.targetUrl} className="blog-action-btn">
                  Go to Cancer Guide →
                </Link>
              </div>
            )}

            {/* TAGS */}
            {blog.tags?.length > 0 && (
              <div className="blog-tags">
                <span>Tags</span>
                <div className="blog-tag-list">
                  {blog.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="blog-sidebar-card">
              <h3>About Zuvius Lifesciences</h3>
              <p>
                Explore insights and information from Zuvius Lifesciences
                across oncology, pharmaceutical healthcare and cancer care.
              </p>
              <Link to="/aboutus" className="blog-sidebar-link">
                About Us →
              </Link>
            </div>

            {/* SIDEBAR PRODUCT OR CANCER HIGHLIGHT CARD */}
            {blog.targetUrl && (
              <div className="blog-sidebar-card highlight">
                <h3>
                  {blog.category === "Product"
                    ? "Product Overview"
                    : "Cancer Guide"}
                </h3>
                <p>
                  {blog.category === "Product"
                    ? "View full prescribing information, strengths, packaging details, and submit an enquiry."
                    : "Access our clinical overview, symptoms, risk factors, stages, and diagnosis options."}
                </p>
                <Link
                  to={blog.targetUrl}
                  className="blog-sidebar-cta"
                >
                  {blog.category === "Product"
                    ? "Go to Product Page →"
                    : "Go to Cancer Page →"}
                </Link>
              </div>
            )}

            {/* RELATED INSIGHTS */}
            {relatedBlogs.length > 0 && (
              <div className="blog-sidebar-card">
                <h3>Related Insights</h3>
                <div className="related-blog-list">
                  {relatedBlogs.map((relatedBlog) => (
                    <Link
                      to={`/blog/${relatedBlog.slug}`}
                      className="related-blog"
                      key={relatedBlog.id}
                    >
                      <div className="related-blog-image">
                        <img
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          className={relatedBlog.imageClass || ""}
                        />
                      </div>
                      <div className="related-blog-content">
                        <span>{relatedBlog.category}</span>
                        <h4>{relatedBlog.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link to="/blog" className="blog-sidebar-back">
              ← All Blogs
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;