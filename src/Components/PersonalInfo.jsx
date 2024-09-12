import React from 'react';

const PersonalInfo = (props) => {
  const { formData, handleChange, errors } = props
  return (
    <div className="form-step">
      <h2>Personal Information</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input  type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`input-style ${errors.name ? 'error' : ''}`}></input>
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input  type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`input-style ${errors.email ? 'error' : ''}`}></input>
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`input-style ${errors.phone ? 'error' : ''}`}></input>
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>
    </div>
  );
};

export default PersonalInfo;
