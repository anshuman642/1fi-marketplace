import React from "react";

const ProductCard = ({ product, onViewDetails }) => {
  const handleViewDetails = () => {
    console.log("VIEW DETAILS CLICKED");
    console.log("Product ID:", product.id);

    if (onViewDetails) {
      onViewDetails(product.id);
    } else {
      console.error("onViewDetails is missing");
    }
  };

  return (
    <div className="product-card">

      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-info">

        <span className="emi-badge">
          EMI Available
        </span>

        <h3 className="product-name">
          {product.name}
        </h3>

        <p className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <p className="product-emi">
          EMI from ₹
          {product.emiPlans &&
          product.emiPlans.length > 0
            ? product.emiPlans[0].monthlyAmount.toLocaleString("en-IN")
            : "0"}
          /month
        </p>

        <button
          type="button"
          className="view-details-btn"
          onClick={handleViewDetails}
        >
          View Details
        </button>

      </div>
    </div>
  );
};

export default ProductCard;