import React, { useState } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext.js';

const NewProjectForm = ({ onClose }) => {
  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    status: 'Not Started',
    priority: 'Medium'
  });

  const { createProject } = ProjectContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProject(projectData);
      onClose();
    } catch (error) {
      console.error('Project creation failed:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Create New Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Project Name</label>
            <input
              type="text"
              name="name"
              value={projectData.name}
              onChange={handleChange}
              required
              className="w-full border rounded p-2"
            />
          </div>
          
          <div>
            <label className="block mb-2">Description</label>
            <textarea
              name="description"
              value={projectData.description}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={projectData.startDate}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block mb-2">End Date</label>
              <input
                type="date"
                name="endDate"
                value={projectData.endDate}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Status</label>
              <select
                name="status"
                value={projectData.status}
                onChange={handleChange}
                className="w-full border rounded p-2"
              >
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Priority</label>
              <select
                name="priority"
                value={projectData.priority}
                onChange={handleChange}
                className="w-full border rounded p-2"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
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
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProjectForm;