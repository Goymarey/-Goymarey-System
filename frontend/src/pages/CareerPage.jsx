import React, { useState } from 'react';
import ApplicationList from '../components/Career/ApplicationList';
import NewApplicationForm from '../components/Career/NewApplicationForm';

const CareerPage = () => {
  const [showNewApplicationForm, setShowNewApplicationForm] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Career Management</h1>
        <button 
          onClick={() => setShowNewApplicationForm(!showNewApplicationForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {showNewApplicationForm ? 'Cancel' : 'New Application'}
        </button>
      </div>

      {showNewApplicationForm && (
        <NewApplicationForm onClose={() => setShowNewApplicationForm(false)} />
      )}

      <div className="bg-white shadow rounded-lg p-4">
        <ApplicationList />
      </div>
    </div>
  );
};

export default CareerPage;