import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AppointmentDetail = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const fetchAppointmentDetails = async () => {
      const mockAppointment = {
        id: appointmentId,
        title: 'Project Kickoff Meeting',
        description: 'Initial meeting to discuss project scope and objectives',
        date: '2024-03-20',
        time: '10:00 AM',
        duration: '1 hour',
        location: 'Conference Room A / Zoom',
        status: 'Scheduled',
        participants: [
          { name: 'John Doe', role: 'Project Manager' },
          { name: 'Jane Smith', role: 'Client Representative' }
        ],
        agenda: [
          'Project introduction',
          'Scope definition',
          'Timeline discussion',
          'Q&A'
        ]
      };
      setAppointment(mockAppointment);
    };

    fetchAppointmentDetails();
  }, [appointmentId]);

  if (!appointment) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{appointment.title}</h1>
          <span className={`
            px-3 py-1 rounded 
            ${appointment.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}
          `}>
            {appointment.status}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
            <div className="space-y-2">
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <p><strong>Duration:</strong> {appointment.duration}</p>
              <p><strong>Location:</strong> {appointment.location}</p>
              <p className="mt-4">{appointment.description}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Participants</h2>
            <div className="space-y-2">
              {appointment.participants.map((participant, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded">
                  <p className="font-bold">{participant.name}</p>
                  <p className="text-sm text-gray-600">{participant.role}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold mb-4 mt-6">Agenda</h2>
            <ul className="list-disc list-inside">
              {appointment.agenda.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetail;