import React from "react";

const EmiPlanCard = ({ plan, selected, onSelect }) => {
  return (
    <button
      type="button"
      className={`emi-plan-card ${
        selected ? "selected" : ""
      }`}
      onClick={() => onSelect(plan)}
    >
      <div className="emi-plan-top">
        <strong>{plan.duration} Months</strong>

        {selected && (
          <span className="selected-check">✓</span>
        )}
      </div>

      <div className="emi-monthly">
        ₹{plan.monthlyAmount.toLocaleString("en-IN")}
        <span>/month</span>
      </div>

      <p>No-cost EMI available</p>
    </button>
  );
};

export default EmiPlanCard;