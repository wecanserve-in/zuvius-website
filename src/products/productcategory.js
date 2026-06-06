import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./productcategory.css";
import { products, productCategories } from "./productdata";
import PageBanner from "../components/PageBanner";

const ProductCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [sortOrder, setSortOrder] = useState("az");
  const [searchTerm, setSearchTerm] = useState("");

  const currentCategory = category?.toLowerCase();

  const categoryData = productCategories.find(
    (item) => item.id?.toLowerCase() === currentCategory
  );

  const categoryProducts = useMemo(() => {
    const filteredProducts = products.filter((product) => {
      const matchesCategory =
        product.category?.toLowerCase() === currentCategory;

      const matchesSearch =
        product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.subtitle?.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    return [...filteredProducts].sort((a, b) => {
      if (sortOrder === "za") {
        return b.name.localeCompare(a.name);
      }

      return a.name.localeCompare(b.name);
    });
  }, [currentCategory, sortOrder, searchTerm]);

  if (!categoryData) {
    return <h2 className="category-not-found">Category not found</h2>;
  }

  return (
    <div className="product-category-page">
      <PageBanner
        image={categoryData.bannerImage}
        title={categoryData.name}
       
        alt={categoryData.name}
      />

      <section className="category-intro">
        <p>{categoryData.description}</p>
      </section>

      <section className="category-feature-box">
        <div className="category-feature-item">
          <div className="category-feature-icon">🏅</div>
          <div>
            <h3>EU-GMP & WHO-GMP</h3>
            <p>Certified Standards</p>
          </div>
        </div>

        <div className="category-feature-item">
          <div className="category-feature-icon">🔗</div>
          <div>
            <h3>{categoryProducts.length}+</h3>
            <p>Products</p>
          </div>
        </div>

        <div className="category-feature-item">
          <div className="category-feature-icon">🌐</div>
          <div>
            <h3>Global Presence</h3>
            <p>Across 50+ Countries</p>
          </div>
        </div>

        <div className="category-feature-item">
          <div className="category-feature-icon">📍</div>
          <div>
            <h3>Trusted by</h3>
            <p>Doctors & Hospitals</p>
          </div>
        </div>
      </section>

      <section className="category-products-area">
        <div className="category-products-topbar">
          <p>
            Showing {categoryProducts.length} of {categoryProducts.length} products
          </p>

          <div className="category-sort-area">
            <div className="category-search-box">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <span>Sort by:</span>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="az">Name (A-Z)</option>
              <option value="za">Name (Z-A)</option>
            </select>

            <button className="category-view-btn active">▦</button>
          </div>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="category-empty-state">
            <h3>No products found.</h3>
            <p>Try searching with a different product name.</p>
          </div>
        ) : (
          <div className="category-products-grid">
            {categoryProducts.map((product) => (
              <div
                className="category-product-card"
                key={`${product.category}-${product.slug}`}
              >
                <div className="category-product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="category-product-content">
                  <h3>{product.name}</h3>
                  <p>{product.subtitle}</p>

                  <button
                    onClick={() =>
                      navigate(`/products/${product.category}/${product.slug}`)
                    }
                  >
                    View Details <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="category-help-box">
        <div className="category-help-left">
          <div className="category-help-icon">✉</div>

          <div>
            <h3>Can’t find what you're looking for?</h3>
            <p>
              Our team is here to help you with product information and
              availability.
            </p>
          </div>
        </div>

        <button>
          Contact Us <span>→</span>
        </button>
      </section>
    </div>
  );
};

export default ProductCategory;