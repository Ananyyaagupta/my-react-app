import React from 'react';
import '../styles.css';

const TreatmentInfo = ({ treatment, goBack }) => {
  return (
    <div className="treatment-info">
      <h2>Treatment Details</h2>
      <p><strong>Date:</strong> {treatment.date}</p>
      <p><strong>Hospital/Clinic:</strong> {treatment.hospital}</p>
      <p><strong>Doctor:</strong> {treatment.doctor}</p>
      <p><strong>Description:</strong> {treatment.description}</p>
      <p><strong>Notes:</strong> {treatment.notes}</p>
      <button className="back-button" onClick={goBack}>Back to Dashboard</button>
    </div>
  );
};

export default TreatmentInfo;
