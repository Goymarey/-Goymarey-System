import React from 'react';
import { 
  ClipboardListIcon, 
  TaskIcon, 
  CalendarIcon, 
  BriefcaseIcon 
} from 'lucide-react';

const DashboardCard = ({ icon, title, value, color }) => (
  <div className={`bg-white shadow-md rounded-lg p-6 flex items-center ${color}`}>
    <div className="mr-4">{icon}</div>
    <div>
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const DashboardHome = () => {
  const dashboardData = [
    {
      title: 'Total Projects',
      value: '12',
      icon: <ClipboardListIcon size={40} className="text-blue-500" />,
      color: 'border-l-4 border-blue-500'
    },
    {
      title: 'Active Tasks',
      value: '45',
      icon: <TaskIcon size={40} className="text-green-500" />,
      color: 'border-l-4 border-green-500'
    },
    {
      title: 'Upcoming Appointments',
      value: '7',
      icon: <CalendarIcon size={40} className="text-purple-500" />,
      color: 'border-l-4 border-purple-500'
    },
    {
      title: 'Open Job Applications',
      value: '3',
      icon: <BriefcaseIcon size={40} className="text-red-500" />,
      color: 'border-l-4 border-red-500'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardData.map((card, index) => (
          <DashboardCard 
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
          {/* Add recent projects list */}
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          {/* Add upcoming appointments list */}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;