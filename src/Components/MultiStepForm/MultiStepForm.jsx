import React, { useState, useEffect } from 'react';
import PersonalInfo from '../PersonalInfo';
import AddressInfo from '../AddressInfo';
import Confirmation from '../Confirmation';
import Navigation from '../Navigation';
import './MultiStepForm.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [errors, setErrors] = useState({});

  // Get Data From Local Storage : )

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Set Data as JSON Format in Local Storage : )

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  // Handling OnChange Event : )

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

// Validation for React Multi Step Form : )
  const validateStep = (currentStep) => {
    const newErrors = {};
    switch (currentStep) {
      case 1:
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        break;
      case 2:
        if (!formData.addressLine1) newErrors.addressLine1 = 'Address Line 1 is required';
        if (!formData.addressLine2) newErrors.addressLine2 = 'Address Line 2 is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.zipCode) newErrors.zipCode = 'Zip Code is required';
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Next and Back Functions : )

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // Form Handling : )
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted Succefully');
    if (validateStep(step)) {
      // Submit the form data : )
      console.log('Form submitted:', formData);
      // Reset form and local storage : )
      setFormData({
        name: '',
        email: '',
        phone: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
      });
      localStorage.removeItem('formData');
      setStep(1);
    }
  };

  // Render Steps According To Steps Count : )

  const renderSteps = () => {
    switch (step) {
      case 1: // Passing Functions as a Props : )
        return <PersonalInfo formData={formData} handleChange={handleChange} errors={errors} />;
      case 2:
        return <AddressInfo formData={formData} handleChange={handleChange} errors={errors} />;
      case 3:
        return <Confirmation formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="multi-step-form">
      <h1 className='heading'>Multi Step Form</h1>
      <Navigation currentStep={step} />
      <form onSubmit={handleSubmit}>
        {renderSteps()}
        <div className="form-buttons">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="custom-btn btn-1">Back</button>
          )}
          {step < 3 && (
            <button type="button" onClick={nextStep} className="custom-btn btn-1">Next</button>
          )}
          {step === 3 && (
            <button type="submit" className="custom-btn btn-1">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
