import React, { useState } from 'react';
import { 
  ClipboardListIcon, 
  UsersIcon, 
  FileTextIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  AlertTriangleIcon 
} from 'lucide-react';

const ProjectDetail = () => {
  const [project, setProject] = useState({
    id: 1,
    name: 'Customer Portal Redesign',
    description: 'Comprehensive redesign of customer-facing web portal to improve user experience and accessibility.',
    status: 'In Progress',
    startDate: '2024-01-15',
    endDate: '2024-03-30',
    client: 'TechCorp Inc.',
    budget: '$75,000',
    progress: 65,
    team: [
      { 
        id: 1, 
        name: 'John Doe', 
        role: 'Lead Designer', 
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg' 
      },
      { 
        id: 2, 
        name: 'Jane Smith', 
        role: 'Backend Developer', 
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg' 
      }
    ],
    tasks: [
      { 
        id: 1, 
        title: 'UI/UX Design', 
        status: 'Completed', 
        assignedTo: 'John Doe',
        dueDate: '2024-02-01' 
      },
      { 
        id: 2, 
        title: 'Backend API Development', 
        status: 'In Progress', 
        assignedTo: 'Jane Smith',
        dueDate: '2024-02-28' 
      },
      { 
        id: 3, 
        title: 'Frontend Implementation', 
        status: 'Pending', 
        assignedTo: 'Mike Johnson',
        dueDate: '2024-03-15' 
      }
    ],
    documents: [
      { 
        id: 1, 
        name: 'Project Proposal', 
        type: 'PDF', 
        uploadDate: '2024-01-10' 
      },
      { 
        id: 2, 
        name: 'Design Wireframes', 
        type: 'Figma', 
        uploadDate: '2024-01-25' 
      }
    ]
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <CheckCircleIcon className="text-green-500" />;
      case 'In Progress':
        return <ClockIcon className="text-blue-500" />;
      case 'Pending':
        return <AlertTriangleIcon className="text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Project Overview */}
        <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <span 
              className={`
                px-3 py-1 rounded-full text-xs font-semibold
                ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                  project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                  'bg-yellow-100 text-yellow-800'}
              `}
            >
              {project.status}
            </span>
          </div>

          <p className="text-gray-600 mb-6">{project.description}</p>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">Start Date</p>
              <p className="font-medium">{project.startDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">End Date</p>
              <p className="font-medium">{project.endDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Budget</p>
              <p className="font-medium">{project.budget}</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-2">Project Progress</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">{project.progress}% Complete</p>
          </div>
        </div>

        {/* Project Team */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-6">
            <UsersIcon className="mr-2 text-gray-500" />
            <h2 className="text-xl font-semibold">Project Team</h2>
          </div>

          {project.team.map(member => (
            <div 
              key={member.id} 
              className="flex items-center mb-4 pb-4 border-b last:border-b-0"
            >
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tasks Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-6">
            <ClipboardListIcon className="mr-2 text-gray-500" />
            <h2 className="text-xl font-semibold">Tasks</h2>
          </div>

          {project.tasks.map(task => (
            <div 
              key={task.id} 
              className="flex items-center justify-between mb-4 pb-4 border-b last:border-b-0"
            >
              <div className="flex items-center">
                {getStatusIcon(task.status)}
                <div className="ml-4">
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-gray-500">Assigned to: {task.assignedTo}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
            </div>
          ))}
        </div>

        {/* Documents Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-6">
            <FileTextIcon className="mr-2 text-gray-500" />
            <h2 className="text-xl font-semibold">Documents</h2>
          </div>

          {project.documents.map(doc => (
            <div 
              key={doc.id} 
              className="flex items-center justify-between mb-4 pb-4 border-b last:border-b-0"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4">
                  {doc.type}
                </div>
                <div>
                  <p className="font-medium">{doc.name}</p>
                  <p className="text-sm text-gray-500">Uploaded: {doc.uploadDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;