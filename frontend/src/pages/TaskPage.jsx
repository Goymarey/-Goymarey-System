import React, { useState } from 'react';
import TaskList from '../components/Task/TaskList';
import NewTaskForm from '../components/Task/NewTaskForm';

const TaskPage = () => {
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <button 
          onClick={() => setShowNewTaskForm(!showNewTaskForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {showNewTaskForm ? 'Cancel' : 'New Task'}
        </button>
      </div>

      {showNewTaskForm && <NewTaskForm onClose={() => setShowNewTaskForm(false)} />}

      <div className="bg-white shadow rounded-lg p-4">
        <TaskList />
      </div>
    </div>
  );
};

export default TaskPage;