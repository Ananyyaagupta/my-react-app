import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import TreatmentInfo from './components/TreatmentInfo';
import AddTreatmentForm from './components/AddTreatmentForm';

const demoTreatments = [
  {
    date: '2023-06-01',
    hospital: 'City Hospital',
    doctor: 'Dr. Smith',
    description: 'Annual physical checkup',
    notes: 'All vitals are normal.'
  },
  {
    date: '2023-05-15',
    hospital: 'County Clinic',
    doctor: 'Dr. Jones',
    description: 'Blood test',
    notes: 'Cholesterol levels are a bit high.'
  },
  {
    date: '2023-04-20',
    hospital: 'Metro Hospital',
    doctor: 'Dr. Brown',
    description: 'X-ray for knee pain',
    notes: 'Minor inflammation detected.'
  }
];

const App = () => {
  const [treatments, setTreatments] = useState(demoTreatments);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const addTreatment = (treatment) => {
    setTreatments([...treatments, treatment]);
    setShowAddForm(false);
  };

  const viewTreatment = (treatment) => {
    setSelectedTreatment(treatment);
  };

  const goBackToDashboard = () => {
    setSelectedTreatment(null);
  };

  return (
    <div className="app-container">
      <h1>User Dashboard</h1>
      {showAddForm ? (
        <AddTreatmentForm addTreatment={addTreatment} />
      ) : selectedTreatment ? (
        <TreatmentInfo treatment={selectedTreatment} goBack={goBackToDashboard} />
      ) : (
        <Dashboard
          treatments={treatments}
          viewTreatment={viewTreatment}
          setShowAddForm={setShowAddForm}
        />
      )}
    </div>
  );
};

export default App;
