import React, { useState } from 'react';
import AppointmentList from '../components/Appointment/AppointmentList';
import NewAppointmentForm from '../components/Appointment/NewAppointmentForm';

const AppointmentPage = () => {
  const [showNewAppointmentForm, setShowNewAppointmentForm] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Appointments</h1>
        <button 
          onClick={() => setShowNewAppointmentForm(!showNewAppointmentForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {showNewAppointmentForm ? 'Cancel' : 'New Appointment'}
        </button>
      </div>

      {showNewAppointmentForm && (
        <NewAppointmentForm onClose={() => setShowNewAppointmentForm(false)} />
      )}

      <div className="bg-white shadow rounded-lg p-4">
        <AppointmentList />
      </div>
    </div>
  );
};

export default AppointmentPage;