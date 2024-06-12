import React, { useState } from 'react';
import '../styles.css';

const AddTreatmentForm = ({ addTreatment }) => {
  const [formData, setFormData] = useState({
    date: '',
    hospital: '',
    doctor: '',
    description: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    if (!formData.date || !formData.hospital || !formData.doctor) {
      alert('Please fill in all required fields');
      return;
    }
    addTreatment(formData);
  };

  return (
    <div className="add-treatment-form">
      <h2>Add New Treatment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Hospital/Clinic</label>
          <input type="text" name="hospital" value={formData.hospital} onChange={handleChange} required />
        </div>
        <div>
          <label>Doctor</label>
          <input type="text" name="doctor" value={formData.doctor} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Notes</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Add Treatment</button>
      </form>
    </div>
  );
};

export default AddTreatmentForm;
