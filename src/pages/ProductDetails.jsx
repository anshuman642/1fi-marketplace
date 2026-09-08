import React, { useEffect, useState } from "react";
import { getProductById } from "../services/marketplaceApi";
import VariantSelector from "../components/VariantSelector";
import EmiPlanCard from "../components/EmiPlanCard";

const ProductDetails = ({ productId, onBack }) => {
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedEmi, setSelectedEmi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);

        const data = await getProductById(productId);

        setProduct(data);

        if (data.variants?.length > 0) {
          setSelectedVariant(data.variants[0]);
        }

        if (data.emiPlans?.length > 0) {
          setSelectedEmi(data.emiPlans[0]);
        }
      } catch (err) {
        setError(err.message || "Unable to load product");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="marketplace-state">
        <p>Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="marketplace-state">
        <h2>Something went wrong</h2>
        <p>{error}</p>

        <button onClick={onBack}>
          ← Back to Marketplace
        </button>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const getMonthlyEmi = () => {
    if (!selectedVariant || !selectedEmi) {
      return 0;
    }

    return Math.ceil(
      selectedVariant.price / selectedEmi.duration
    );
  };

  const handleProceed = () => {
    alert(
      `Proceeding with EMI\n\n` +
      `Product: ${product.name}\n` +
      `Variant: ${selectedVariant.name}\n` +
      `Price: ₹${selectedVariant.price.toLocaleString("en-IN")}\n` +
      `EMI Duration: ${selectedEmi.duration} Months\n` +
      `Monthly EMI: ₹${getMonthlyEmi().toLocaleString("en-IN")}`
    );
  };

  return (
    <div className="product-details-page">

      <button
        className="back-button"
        onClick={onBack}
      >
        ← Back to Marketplace
      </button>

      <div className="product-details">

        {/* Product Image */}
        <div className="details-image-section">
          <img
            src={product.image}
            alt={product.name}
            className="details-image"
          />
        </div>

        {/* Product Information */}
        <div className="details-info">

          <span className="marketplace-label">
            1Fi MARKETPLACE
          </span>

          <h1>{product.name}</h1>

          <p className="details-price">
            ₹{selectedVariant?.price.toLocaleString("en-IN")}
          </p>

          {/* Variant */}
          {product.variants?.length > 0 && (
            <div className="details-section">
              <h3>Select Variant</h3>

              <VariantSelector
                variants={product.variants}
                selectedVariant={selectedVariant}
                onSelect={setSelectedVariant}
              />
            </div>
          )}

          {/* EMI */}
          {product.emiPlans?.length > 0 && (
            <div className="details-section">

              <h3>Select EMI Plan</h3>

              <div className="emi-plans">
                {product.emiPlans.map((plan) => (
                  <EmiPlanCard
                    key={plan.id}
                    plan={plan}
                    selected={selectedEmi?.id === plan.id}
                    onSelect={setSelectedEmi}
                  />
                ))}
              </div>

            </div>
          )}

          {/* EMI Summary */}
          {selectedVariant && selectedEmi && (
            <div className="emi-summary">

              <div>
                <span>Monthly EMI</span>

                <strong>
                  ₹{getMonthlyEmi().toLocaleString("en-IN")}
                  /month
                </strong>
              </div>

              <div>
                <span>Duration</span>

                <strong>
                  {selectedEmi.duration} Months
                </strong>
              </div>

            </div>
          )}

          {/* CTA */}
          <button
            className="proceed-button"
            disabled={!selectedVariant || !selectedEmi}
            onClick={handleProceed}
          >
            Proceed with EMI →
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;