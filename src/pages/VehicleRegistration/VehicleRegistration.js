import React, { useState } from 'react';
import './VehicleRegistration.css';
import Swal from 'sweetalert2';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    Sno: '',
    Rname: '',
    VehicleNo: '',
    VehicleRfidTag: ''
  });

  const [formErrors, setFormErrors] = useState({
    Sno: false,
    Rname: false,
    VehicleNo: false,
    VehicleRfidTag: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
  
    if (name === 'Sno') {
      newValue = value.replace(/\D/g, '');
      if (newValue.length > 7) {
        newValue = newValue.slice(0, 7);
      }
    } else if (name === 'Rname') {
      newValue = value.replace(/[^a-zA-Z\s.]/g, '');
    } else if (name === 'VehicleRfidTag') {
      newValue = value.replace(/\D/g, '');
      if (newValue.length > 6) {
        newValue = newValue.slice(0, 6);
      }
    } else if (name === 'VehicleNo') {
      //"WP CAD-1010", "WP CA-1010", "146-1545"
      newValue = value.replace(/[^a-zA-Z0-9\s-]/g, '');
    }
  
    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  const handleSubmit = async () => {
    // Check for empty fields
    const errors = {};
    let hasErrors = false;
  
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        errors[key] = true;
        hasErrors = true;
      }
    });
  
    if (hasErrors) {
      setFormErrors(errors);
      return;
    }
  
    try {
      const response = await fetch(`https://esystems.cdl.lk/backend-Test/UhfRfidGangwaySolution/UhfRfid/PostRegTag?Sno=${formData.Sno}&Rname=${formData.Rname}&VehicleNo=${formData.VehicleNo}&VehicleRfidTag=${formData.VehicleRfidTag}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }
  
      const responseData = await response.json();
      console.log(responseData); 
  
      if (responseData.StatusCode === 500) {
        // Show error message using SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Error',
          // text: responseData.message,
          text: "Vehicle Tag Already Exist",
        });
      } else if (response.status === 200) {
        setFormData({
          Sno: '',
          Rname: '',
          VehicleNo: '',
          VehicleRfidTag: ''
        });
  
        // Show success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Form data submitted successfully!',
        });
      }
    } catch (error) {
      console.error('Error submitting form data:', error.message);
      // Show error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to submit form data. Please try again later.',
      });
    }
  };
  

  return (
    <div>
      <Header />

        
      <section className="containerUser">
        <header>Vehicle Registration Form</header>
        <div className="form">
          <div className="input-box"> 
            <input type="text" name="Sno" value={formData.Sno} onChange={handleChange} placeholder="Enter Service Number" required />
            {formErrors.Sno && <span className="error-message">Service Number is required</span>}
          </div>
          <div className="input-box">
            <input type="text" name="Rname" value={formData.Rname} onChange={handleChange} placeholder="Enter Employee Name" required />
            {formErrors.Rname && <span className="error-message">Employee Name is required</span>}
          </div>
          <div className="input-box">
            <input type="text" name="VehicleNo" value={formData.VehicleNo} onChange={handleChange} placeholder="Enter Vehicle No" required />
            {formErrors.VehicleNo && <span className="error-message">Vehicle No is required</span>}
          </div>
          <div className="input-box">
            <input type="text" name="VehicleRfidTag" value={formData.VehicleRfidTag} onChange={handleChange} placeholder="Enter Vehicle RFID Tag" required />
            {formErrors.VehicleRfidTag && <span className="error-message">Vehicle RFID Tag is required</span>}
          </div>
          <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </section>
      <div  className="foot">
      <Footer />
      </div>
  
    </div>
  );
};

export default RegistrationForm;
