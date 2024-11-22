import React, { useState } from 'react';
import ProjectList from '../components/Project/ProjectList';
import NewProjectForm from '../components/Project/NewProjectForm';
import { ProjectContext } from '../contexts/ProjectContext';

const ProjectPage = () => {
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const { projects } = ProjectContext();

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <button 
          onClick={() => setShowNewProjectForm(!showNewProjectForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {showNewProjectForm ? 'Cancel' : 'New Project'}
        </button>
      </div>

      {showNewProjectForm && <NewProjectForm onClose={() => setShowNewProjectForm(false)} />}

      <div className="bg-white shadow rounded-lg p-4">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default ProjectPage;