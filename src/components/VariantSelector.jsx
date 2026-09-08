import React from "react";

const VariantSelector = ({
  variants,
  selectedVariant,
  onSelect,
}) => {
  return (
    <div className="variant-options">
      {variants.map((variant) => (
        <button
          key={variant.id}
          type="button"
          className={`variant-button ${
            selectedVariant?.id === variant.id
              ? "selected"
              : ""
          }`}
          onClick={() => onSelect(variant)}
        >
          <span>{variant.name}</span>

          <strong>
            ₹{variant.price.toLocaleString("en-IN")}
          </strong>
        </button>
      ))}
    </div>
  );
};

export default VariantSelector;