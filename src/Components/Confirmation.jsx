import React from 'react';

const Confirmation = (props) => {
  
  const { formData } = props;

  return (
    <div className="form-step">
      <h2>Confirmation</h2>
      <div className="confirmation-details">
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>

        <h3>Address Information</h3>
        <p><strong>Address Line 1:</strong> {formData.addressLine1}</p>
        <p><strong>Address Line 2:</strong> {formData.addressLine2}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>State:</strong> {formData.state}</p>
        <p><strong>Zip Code:</strong> {formData.zipCode}</p>
      </div>
    </div>
  );
};

export default Confirmation;
