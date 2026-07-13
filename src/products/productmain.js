import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./productmain.css";
import "./productcategory.css";

import { productCategories, products } from "./productdata";
import PageBanner from "../components/PageBanner";

const ProductMain = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] =
    useState("oncoace");

  const [sortOrder, setSortOrder] = useState("az");
  const [searchTerm, setSearchTerm] = useState("");

  const selectedCategoryData = productCategories.find(
    (category) =>
      category.id?.toLowerCase() ===
      selectedCategory.toLowerCase()
  );

  const visibleProducts = useMemo(() => {
    const normalizedSearch = searchTerm
      .trim()
      .toLowerCase();

    const filteredProducts = products.filter((product) => {
      const matchesCategory =
        product.category?.toLowerCase() ===
        selectedCategory.toLowerCase();

      const matchesSearch =
        normalizedSearch === "" ||
        [product.name, product.subtitle]
          .filter(Boolean)
          .some((field) =>
            field
              .toLowerCase()
              .includes(normalizedSearch)
          );

      return matchesCategory && matchesSearch;
    });

    return [...filteredProducts].sort((a, b) => {
      const firstValue =
        a.name || a.subtitle || "";

      const secondValue =
        b.name || b.subtitle || "";

      if (sortOrder === "za") {
        return secondValue.localeCompare(firstValue);
      }

      return firstValue.localeCompare(secondValue);
    });
  }, [
    selectedCategory,
    searchTerm,
    sortOrder,
  ]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSearchTerm("");
    setSortOrder("az");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="products-main-page product-category-page">
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

      <section className="product-main-filter-section">
        <div className="product-main-heading">
          <span className="product-main-label">
            PRODUCT PORTFOLIO
          </span>
          <div className="product-main-heading-line" />

          <p>
            Select a product category and explore our
            complete portfolio.
          </p>
        </div>

        <div
          className="product-category-filter"
          role="tablist"
          aria-label="Product categories"
        >
          {productCategories.map((category) => {
            const isActive =
              selectedCategory === category.id;

            return (
              <button
                type="button"
                key={category.id}
                className={`product-category-filter-btn ${
                  isActive ? "active" : ""
                }`}
                onClick={() =>
                  handleCategoryChange(category.id)
                }
                role="tab"
                aria-selected={isActive}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {selectedCategoryData?.description && (
          <div className="category-intro">
            <p>
              {selectedCategoryData.description}
            </p>
          </div>
        )}
      </section>

      <section className="category-products-area">
        <div className="category-products-topbar">
          <p>
            Showing {visibleProducts.length} of{" "}
            {visibleProducts.length} products
          </p>

          <div className="category-sort-area">
            <div className="category-search-box">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
              />
            </div>

            <span>Sort by:</span>

            <select
              value={sortOrder}
              onChange={(event) =>
                setSortOrder(event.target.value)
              }
            >
              <option value="az">
                Name (A-Z)
              </option>

              <option value="za">
                Name (Z-A)
              </option>
            </select>

            <button
              className="category-view-btn active"
              type="button"
              aria-label="Grid view"
            >
              ▦
            </button>
          </div>
        </div>

        {visibleProducts.length === 0 ? (
          <div className="category-empty-state">
            <h3>No products found.</h3>

            <p>
              Try searching with a different product
              name.
            </p>
          </div>
        ) : (
          <div className="category-products-grid">
            {visibleProducts.map((product) => (
              <Link
                to={`/products/${product.category}/${product.slug}`}
                className="category-product-card"
                key={`${product.category}-${product.slug}`}
              >
                <div className="category-product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={
                      product.imageClass || ""
                    }
                  />
                </div>

                <div className="category-product-content">
                  <h3>{product.name}</h3>

                  <p>{product.subtitle}</p>

                  <div className="product-card-arrow">
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="category-help-box">
        <div className="category-help-left">
          <div className="category-help-icon">
            ✉
          </div>

          <div>
            <h3>
              Can’t find what you're looking for?
            </h3>

            <p>
              Our team is here to help you with
              product information and availability.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleContactClick}
        >
          Contact Us <span>→</span>
        </button>
      </section>
    </div>
  );
};

export default ProductMain;