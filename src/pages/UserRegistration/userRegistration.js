import React, { useState } from 'react';
import './userRegistration.css';
import Swal from 'sweetalert2';
import './userRegistration'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    Sno: '',
    Rname: '',
    VehicleNo: '',
    VehicleRfidTag: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://esystems.cdl.lk/backend-Test/UhfRfidGangwaySolution/UhfRfid/PostRegTag?Sno=${formData.Sno}&Rname=${formData.Rname}&VehicleNo=${formData.VehicleNo}&VehicleRfidTag=${formData.VehicleRfidTag}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        //body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      console.log('Form data submitted successfully');
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
      <section className="containerUser">
        
        <header>Registration Form</header>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-box">
            {/* <label>Service Number</label> */}
            <input type="text" name="Sno" value={formData.Sno} onChange={handleChange} placeholder="Enter Service Number" required />
          </div>
          <div className="input-box">
            {/* <label>Employee Name</label> */}
            <input type="text" name="Rname" value={formData.Rname} onChange={handleChange} placeholder="Enter Employee Name" required />
          </div>
          <div className="input-box">
            {/* <label>Vehicle No</label> */}
            <input type="text" name="VehicleNo" value={formData.VehicleNo} onChange={handleChange} placeholder="Enter Vehicle No" required />
          </div>
          <div className="input-box">
            {/* <label>Vehicle RFID Tag</label> */}
            <input type="text" name="VehicleRfidTag" value={formData.VehicleRfidTag} onChange={handleChange} placeholder="Enter Vehicle RFID Tag" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
  );
};

export default RegistrationForm;
