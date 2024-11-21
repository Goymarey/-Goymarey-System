import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState('upcoming');

  useEffect(() => {
    const fetchAppointments = async () => {
      const mockAppointments = [
        { 
          id: 1, 
          title: 'Project Kickoff Meeting', 
          date: '2024-03-20', 
          time: '10:00 AM', 
          status: 'Scheduled',
          participants: ['John Doe', 'Jane Smith']
        },
        { 
          id: 2, 
          title: 'Client Review', 
          date: '2024-03-15', 
          time: '2:00 PM', 
          status: 'Completed',
          participants: ['Mike Johnson']
        }
      ];
      setAppointments(mockAppointments);
    };

    fetchAppointments();
  }, []);

  const filteredAppointments = appointments.filter(appt => 
    filter === 'all' || 
    (filter === 'upcoming' && appt.status === 'Scheduled') ||
    (filter === 'past' && appt.status === 'Completed')
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Appointments</h2>
        <div>
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded p-2"
          >
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
            <option value="all">All Appointments</option>
          </select>
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Time</th>
            <th className="p-3 text-left">Participants</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map(appointment => (
            <tr key={appointment.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{appointment.title}</td>
              <td className="p-3">{appointment.date}</td>
              <td className="p-3">{appointment.time}</td>
              <td className="p-3">
                {appointment.participants.join(', ')}
              </td>
              <td className="p-3 text-right">
                <Link 
                  to={`/appointments/${appointment.id}`} 
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;