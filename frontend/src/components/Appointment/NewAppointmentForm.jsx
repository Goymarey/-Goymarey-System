import React, { useState } from 'react';

const NewAppointmentForm = ({ onClose }) => {
  const [appointmentData, setAppointmentData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    duration: '1 hour',
    location: '',
    participants: ['']
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleParticipantChange = (index, value) => {
    const newParticipants = [...appointmentData.participants];
    newParticipants[index] = value;
    setAppointmentData(prev => ({
      ...prev,
      participants: newParticipants
    }));
  };

  const addParticipant = () => {
    setAppointmentData(prev => ({
      ...prev,
      participants: [...prev.participants, '']
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Appointment creation logic
      console.log('Creating appointment:', appointmentData);
      onClose();
    } catch (error) {
      console.error('Appointment creation failed:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Schedule New Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Appointment Title</label>
            <input
              type="text"
              name="title"
              value={appointmentData.title}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
          
          <div>
            <label className="block mb-2">Description</label>
            <textarea
              name="description"
              value={appointmentData.description}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={appointmentData.date}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block mb-2">Time</label>
              <input
                type="time"
                name="time"
                value={appointmentData.time}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Duration</label>
              <select
                name="duration"
                value={appointmentData.duration}
                onChange={handleChange}
                className="w-full border rounded p-2"
              >
                <option value="30 minutes">30 minutes</option>
                <option value="1 hour">1 hour</option>
                <option value="1.5 hours">1.5 hours</option>
                <option value="2 hours">2 hours</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={appointmentData.location}
                onChange={handleChange}
                placeholder="Conference Room / Zoom Link"
                className="w-full border rounded p-2"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Participants</label>
            {appointmentData.participants.map((participant, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={participant}
                  onChange={(e) => handleParticipantChange(index, e.target.value)}
                  placeholder="Enter participant name"
                  className="w-full border rounded p-2 mr-2"
                />
              </div>
            ))}
            <button 
              type="button" 
              onClick={addParticipant}
              className="text-blue-500 hover:underline"
            >
              + Add Participant
            </button>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Schedule Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAppointmentForm;