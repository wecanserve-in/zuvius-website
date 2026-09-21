import { Link, useParams } from "react-router-dom";
import blogs from "./blogdata";
import "./blogdetail.css";

const BlogDetail = () => {
  const { slug } = useParams();

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return (
      <main className="blog-detail-page">

        <section className="blog-detail-container">

          <div className="blog-not-found">

            <h1>
              Article Not Found
            </h1>

            <p>
              The article you are looking for
              could not be found.
            </p>

            <Link
              to="/blog"
              className="blog-back-button"
            >
              ← Back to Blogs
            </Link>

          </div>

        </section>

      </main>
    );
  }


  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.id !== blog.id &&
        item.category === blog.category
    )
    .slice(0, 3);


  return (
    <main
      className={`blog-detail-page ${
        blog.category === "Product"
          ? "product-blog-detail"
          : ""
      }`}
    >

      <section className="blog-detail-container">

        <div className="blog-detail-layout">

          {/* =================================================
              ARTICLE
          ================================================= */}

          <article className="blog-article">

            {/* ARTICLE HEADER */}

            <div className="blog-article-top">

              <div className="blog-detail-meta">

                <span className="blog-detail-category">
                  {blog.category}
                </span>

                <span>
                  {blog.date}
                </span>

                <span>
                  {blog.readTime}
                </span>

              </div>


              <h1>
                {blog.title}
              </h1>


              <p className="blog-detail-excerpt">
                {blog.excerpt}
              </p>


              <div className="blog-author">
                By{" "}
                <strong>
                  {blog.author}
                </strong>
              </div>

            </div>


            {/* =================================================
                FEATURE IMAGE
            ================================================= */}

            {blog.image && (
              <div className="blog-detail-feature-image">

                <img
                  src={blog.image}
                  alt={blog.title}
                />

              </div>
            )}


            {/* =================================================
                ARTICLE CONTENT
            ================================================= */}

            <div className="blog-article-content">

              {blog.content.map(
                (block, index) => {

                  if (
                    block.type ===
                    "paragraph"
                  ) {
                    return (
                      <p key={index}>
                        {block.text}
                      </p>
                    );
                  }


                  if (
                    block.type ===
                    "heading"
                  ) {
                    return (
                      <h2 key={index}>
                        {block.text}
                      </h2>
                    );
                  }


                  if (
                    block.type === "list"
                  ) {
                    return (
                      <ul key={index}>

                        {block.items.map(
                          (
                            item,
                            itemIndex
                          ) => (
                            <li
                              key={
                                itemIndex
                              }
                            >
                              {item}
                            </li>
                          )
                        )}

                      </ul>
                    );
                  }


                  if (
                    block.type ===
                    "infoTable"
                  ) {
                    return (
                      <div
                        className="blog-info-table-wrapper"
                        key={index}
                      >

                        <table className="blog-info-table">

                          <tbody>

                            {block.items.map(
                              (
                                item,
                                itemIndex
                              ) => (
                                <tr
                                  key={
                                    itemIndex
                                  }
                                >

                                  <th>
                                    {
                                      item.label
                                    }
                                  </th>

                                  <td>
                                    {
                                      item.value
                                    }
                                  </td>

                                </tr>
                              )
                            )}

                          </tbody>

                        </table>

                      </div>
                    );
                  }


                  if (
                    block.type ===
                    "faq"
                  ) {
                    return (
                      <div
                        className="blog-faq"
                        key={index}
                      >

                        <h3>
                          {
                            block.question
                          }
                        </h3>

                        <p>
                          {block.answer}
                        </p>

                      </div>
                    );
                  }


                  return null;
                }
              )}

            </div>


            {/* =================================================
                TAGS
            ================================================= */}

            {blog.tags?.length > 0 && (
              <div className="blog-tags">

                <span>
                  Tags
                </span>

                <div className="blog-tag-list">

                  {blog.tags.map(
                    (tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    )
                  )}

                </div>

              </div>
            )}

          </article>


          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="blog-sidebar">

            <div className="blog-sidebar-card">

              <h3>
                About Zuvius
                Lifesciences
              </h3>

              <p>
                Explore insights and
                information from Zuvius
                Lifesciences across oncology,
                pharmaceutical healthcare
                and cancer care.
              </p>

              <Link
                to="/aboutus"
                className="blog-sidebar-link"
              >
                About Us →
              </Link>

            </div>


            {relatedBlogs.length > 0 && (
              <div className="blog-sidebar-card">

                <h3>
                  Related Insights
                </h3>

                <div className="related-blog-list">

                  {relatedBlogs.map(
                    (relatedBlog) => (

                      <Link
                        to={`/blog/${relatedBlog.slug}`}
                        className="related-blog"
                        key={relatedBlog.id}
                      >

                        <div className="related-blog-image">

                          <img
                            src={
                              relatedBlog.image
                            }
                            alt={
                              relatedBlog.title
                            }
                          />

                        </div>


                        <div className="related-blog-content">

                          <span>
                            {
                              relatedBlog.category
                            }
                          </span>

                          <h4>
                            {
                              relatedBlog.title
                            }
                          </h4>

                        </div>

                      </Link>

                    )
                  )}

                </div>

              </div>
            )}


            <Link
              to="/blog/all"
              className="blog-sidebar-back"
            >
              ← All Blogs
            </Link>

          </aside>

        </div>

      </section>

    </main>
  );
};

export default BlogDetail;