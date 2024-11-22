import React, { useState } from 'react';
import ApplicationList from '../components/Career/ApplicationList';
import NewApplicationForm from '../components/Career/NewApplicationForm';
import '../styles/pages.css';

const CareerPage = () => {
  const [showNewApplicationForm, setShowNewApplicationForm] = useState(false);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Career Management</h1>
        <button 
          onClick={() => setShowNewApplicationForm(!showNewApplicationForm)}
          className="primary-button"
        >
          {showNewApplicationForm ? 'Cancel' : 'New Application'}
        </button>
      </div>

      {showNewApplicationForm && (
        <NewApplicationForm onClose={() => setShowNewApplicationForm(false)} />
      )}

      <div className="content-card">
        <ApplicationList />
      </div>
    </div>
  );
};

export default CareerPage;