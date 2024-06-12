import React, { useState } from 'react';
import '../styles.css';

const Dashboard = ({ treatments, viewTreatment, setShowAddForm }) => {
  const [filter, setFilter] = useState('');

  const filteredTreatments = treatments.filter(treatment =>
    treatment.hospital.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="dashboard">
      <div className="filter-container">
        <input
          type="text"
          placeholder="Filter by hospital/clinic"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button onClick={() => setShowAddForm(true)}>Add New Treatment</button>
      </div>
      <ul className="treatment-list">
        {filteredTreatments.map((treatment, index) => (
          <li key={index} onClick={() => viewTreatment(treatment)}>
            <div>Date: {treatment.date}</div>
            <div>Hospital: {treatment.hospital}</div>
            <div>Doctor: {treatment.doctor}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
