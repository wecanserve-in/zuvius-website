import React from "react";
import { useNavigate } from "react-router-dom";
import "./productmain.css";
import { productCategories, products } from "./productdata";
import PageBanner from "../components/PageBanner";

const ProductMain = () => {
  const navigate = useNavigate();

  const getFeaturedProducts = (categoryId) => {
    const featuredProducts = {
      oncoace: ["anastroz", "auset", "capetaz"],
      nutrazeutica: ["glutox-t", "calciboon-zm", "zurcumin"],
    };

    const selectedSlugs = featuredProducts[categoryId] || [];

    return products
      .filter((product) => product.category === categoryId)
      .filter((product) => selectedSlugs.includes(product.slug))
      .sort(
        (a, b) =>
          selectedSlugs.indexOf(a.slug) - selectedSlugs.indexOf(b.slug)
      );
  };

  return (
    <div className="products-main-page">
      <PageBanner
        image="/products/productsbanner.png"
        title={
          <>
            Our <br />
            Products
          </>
        }
        description=""
        alt="Our Products"
      />

      {productCategories.map((category) => (
        <section
          className={`products-category-section products-category-${category.color}`}
          key={category.id}
        >
          <div className="products-category-header">
            <div className="products-category-info">
              <div className="products-category-icon">
                {category.color === "green" ? "♧" : "♢"}
              </div>

              <div className="products-category-text">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
            </div>

            <div className="products-category-actions">
              <button className="products-category-brochure-btn">
                Download Brochure <span>→</span>
              </button>
            </div>
          </div>

          <div className="products-category-grid">
            {getFeaturedProducts(category.id).map((product) => (
              <div className="products-product-card" key={product.id}>
                <div className="products-product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={product.imageClass || ""}
                  />
                </div>

                <div className="products-product-content">
                  <h3>{product.name}</h3>
                  <p>{product.subtitle}</p>

                  <div className="products-product-bottom">
                    <span>{product.type}</span>

                    <button
                      onClick={() =>
                        navigate(`/products/${product.category}/${product.slug}`)
                      }
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="products-category-footer">
            <button
              className="products-category-view-btn"
              onClick={() => navigate(`/products/${category.id}`)}
            >
              View all {category.name} products <span>→</span>
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductMain;