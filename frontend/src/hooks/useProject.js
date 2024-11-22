import { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext.js';

export const ProjectContext = () => {
    const context = useContext(ProjectContext);
    if (!context) {
      throw new Error('ProjectContext must be used within a ProjectProvider');
    }
    return context;
  };