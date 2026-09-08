import React, { useState } from "react";
import "./App.css";

import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/productDetails";

function App() {
  const [showMarketplace, setShowMarketplace] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
  };

  // Product Details
  if (selectedProductId) {
    return (
      <ProductDetails
        productId={selectedProductId}
        onBack={() => setSelectedProductId(null)}
      />
    );
  }

  // Marketplace
  if (showMarketplace) {
    return (
      <Marketplace
        onBack={() => setShowMarketplace(false)}
        onProductSelect={handleProductSelect}
      />
    );
  }

  // Shop
  return (
    <div className="shop-page">
      <header className="shop-header">
        <h1>Shop</h1>
        <p>Explore products and offers</p>
      </header>

      <main className="shop-options">

        <button className="shop-option">
          <div>
            <h2>Top Brands</h2>
            <p>Explore products from top brands</p>
          </div>
          <span>→</span>
        </button>

        <button className="shop-option">
          <div>
            <h2>Nearby Stores</h2>
            <p>Find stores near you</p>
          </div>
          <span>→</span>
        </button>

        <button
          className="shop-option marketplace-option"
          onClick={() => setShowMarketplace(true)}
        >
          <div>
            <h2>1Fi Marketplace</h2>
            <p>Shop products with flexible EMI options</p>
          </div>
          <span>→</span>
        </button>

      </main>
    </div>
  );
}

export default App;