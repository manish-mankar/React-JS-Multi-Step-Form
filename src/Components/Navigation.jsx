import React from "react";

const Navigation = (props) => {
  const { currentStep } = props;
  return (
    <div className="form-navigation">
      <div className={`step ${currentStep === 1 ? "isActive" : ""}`}>
        Personal Information
      </div>
      <div className={`step ${currentStep === 2 ? "isActive" : ""}`}>
        Address Information
      </div>
      <div className={`step ${currentStep === 3 ? "isActive" : ""}`}>
        Confirmation
      </div>
    </div>
  );
};

export default Navigation;
