import React from 'react';

const AddressInfo = (props) => {
 // Destructuring Functions as Props : )
  const { formData, handleChange, errors } = props;
  
  return (
    <div className="form-step">
      <h2>Address Information</h2>
      <div className="form-group">
        <label htmlFor="addressLine1">Address Line 1</label>
        <input  type="text"
          id="addressLine1"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
          className={`input-style ${errors.addressLine1 ? 'error' : ''}`}></input>
        {errors.addressLine1 && <span className="error-message">{errors.addressLine1}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="addressLine2">Address Line 2</label>
        <input  type="text"
          id="addressLine2"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
          className={`input-style ${errors.addressLine2 ? 'error' : ''}`}></input>
         {errors.addressLine2 && <span className="error-message">{errors.addressLine2}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input  type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={`input-style ${errors.city ? 'error' : ''}`}></input>
        {errors.city && <span className="error-message">{errors.city}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
         <input  type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className={`input-style ${errors.state ? 'error' : ''}`} />
        {errors.state && <span className="error-message">{errors.state}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="zipCode">Zip Code</label>
        <input  type="tel"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className={`input-style ${errors.zipCode ? 'error' : ''}`} />
        {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
      </div>
    </div>
  );
};

export default AddressInfo;
