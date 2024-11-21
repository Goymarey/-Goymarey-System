import React, { useState } from 'react';
import { 
  PlusIcon, 
  SearchIcon, 
  FilterIcon, 
  MoreVerticalIcon 
} from 'lucide-react';

const ProjectStatus = {
  COMPLETED: 'Completed',
  IN_PROGRESS: 'In Progress',
  PLANNED: 'Planned',
  ON_HOLD: 'On Hold'
};

const ProjectList = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Customer Portal Redesign',
      description: 'Comprehensive redesign of customer-facing web portal',
      client: 'TechCorp Inc.',
      status: ProjectStatus.IN_PROGRESS,
      startDate: '2024-01-15',
      endDate: '2024-03-30',
      team: [
        { id: 1, name: 'John Doe', role: 'Lead Designer' },
        { id: 2, name: 'Jane Smith', role: 'Backend Developer' }
      ]
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Cross-platform mobile application for service booking',
      client: 'StartUp Solutions',
      status: ProjectStatus.PLANNED,
      startDate: '2024-03-01',
      endDate: '2024-06-30',
      team: [
        { id: 3, name: 'Mike Johnson', role: 'Project Manager' },
        { id: 4, name: 'Emily Brown', role: 'Frontend Developer' }
      ]
    },
    {
      id: 3,
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      client: 'Global Retail',
      status: ProjectStatus.COMPLETED,
      startDate: '2023-09-01',
      endDate: '2024-01-15',
      team: [
        { id: 5, name: 'Sarah Williams', role: 'Full Stack Developer' }
      ]
    }
  ]);

  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filteredProjects = projects.filter(project => 
    project.name.toLowerCase().includes(filter.toLowerCase()) &&
    (statusFilter === '' || project.status === statusFilter)
  );

  const getStatusColor = (status) => {
    switch (status) {
      case ProjectStatus.COMPLETED:
        return 'bg-green-100 text-green-800';
      case ProjectStatus.IN_PROGRESS:
        return 'bg-blue-100 text-blue-800';
      case ProjectStatus.PLANNED:
        return 'bg-yellow-100 text-yellow-800';
      case ProjectStatus.ON_HOLD:
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600">
          <PlusIcon className="mr-2" size={20} />
          New Project
        </button>
      </div>

      <div className="mb-6 flex space-x-4">
        <div className="relative flex-grow">
          <input 
            type="text" 
            placeholder="Search projects..." 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-2 pl-10 border rounded"
          />
          <SearchIcon className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>

        <div className="relative">
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full p-2 border rounded appearance-none"
          >
            <option value="">All Statuses</option>
            {Object.values(ProjectStatus).map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
          <FilterIcon className="absolute right-3 top-3 text-gray-400" size={20} />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map(project => (
          <div 
            key={project.id} 
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <button>
                <MoreVerticalIcon className="text-gray-500" />
              </button>
            </div>

            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="flex justify-between items-center mb-4">
              <span 
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}
              >
                {project.status}
              </span>
              <span className="text-sm text-gray-500">{project.client}</span>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-gray-500">Start Date</p>
                  <p className="font-medium">{project.startDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">End Date</p>
                  <p className="font-medium">{project.endDate}</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-500 mb-2">Team</p>
                <div className="flex -space-x-2">
                  {project.team.map(member => (
                    <div 
                      key={member.id}
                      className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center"
                      title={`${member.name} - ${member.role}`}
                    >
                      {member.name.charAt(0)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;