import React, { useState } from 'react';
import { 
  ClipboardListIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  AlertTriangleIcon 
} from 'lucide-react';

const ProjectStatus = {
  COMPLETED: 'Completed',
  IN_PROGRESS: 'In Progress',
  AT_RISK: 'At Risk',
  ON_HOLD: 'On Hold'
};

const ProjectOverview = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Customer Portal Redesign',
      client: 'TechCorp Inc.',
      status: ProjectStatus.IN_PROGRESS,
      progress: 65,
      deadline: '2024-03-15'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      client: 'StartUp Solutions',
      status: ProjectStatus.AT_RISK,
      progress: 40,
      deadline: '2024-02-28'
    },
    {
      id: 3,
      name: 'E-commerce Platform',
      client: 'Global Retail',
      status: ProjectStatus.COMPLETED,
      progress: 100,
      deadline: '2024-01-20'
    },
    {
      id: 4,
      name: 'Internal HR System',
      client: 'Company Internal',
      status: ProjectStatus.ON_HOLD,
      progress: 25,
      deadline: '2024-04-30'
    }
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case ProjectStatus.COMPLETED:
        return <CheckCircleIcon className="text-green-500" />;
      case ProjectStatus.IN_PROGRESS:
        return <ClockIcon className="text-blue-500" />;
      case ProjectStatus.AT_RISK:
        return <AlertTriangleIcon className="text-red-500" />;
      case ProjectStatus.ON_HOLD:
        return <ClipboardListIcon className="text-gray-500" />;
      default:
        return null;
    }
  };

  const getProgressColor = (progress) => {
    if (progress < 30) return 'bg-red-500';
    if (progress < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Project Overview</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Create New Project
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-4 text-left">Project Name</th>
              <th className="p-4 text-left">Client</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Progress</th>
              <th className="p-4 text-left">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b hover:bg-gray-50">
                <td className="p-4 flex items-center">
                  {getStatusIcon(project.status)}
                  <span className="ml-2">{project.name}</span>
                </td>
                <td className="p-4">{project.client}</td>
                <td className="p-4">
                  <span 
                    className={`
                      px-3 py-1 rounded-full text-xs font-semibold
                      ${project.status === ProjectStatus.COMPLETED ? 'bg-green-100 text-green-800' : 
                        project.status === ProjectStatus.IN_PROGRESS ? 'bg-blue-100 text-blue-800' :
                        project.status === ProjectStatus.AT_RISK ? 'bg-red-100 text-red-800' : 
                        'bg-gray-100 text-gray-800'}
                    `}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${getProgressColor(project.progress)}`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">{project.progress}%</span>
                </td>
                <td className="p-4">{project.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectOverview;