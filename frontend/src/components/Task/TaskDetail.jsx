import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TaskDetail = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch task details from API
    const fetchTaskDetails = async () => {
      // Placeholder mock data
      const mockTask = {
        id: taskId,
        title: 'Implement User Authentication',
        description: 'Create authentication flow with JWT',
        status: 'In Progress',
        priority: 'High',
        assignedTo: 'John Doe',
        dueDate: '2024-03-15',
        comments: [
          { id: 1, author: 'Jane Smith', text: 'Need to review security requirements' }
        ]
      };
      setTask(mockTask);
    };

    fetchTaskDetails();
  }, [taskId]);

  const handleStatusChange = (newStatus) => {
    setTask(prev => ({ ...prev, status: newStatus }));
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{task.title}</h1>
          <div>
            <select 
              value={task.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="border rounded p-2"
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Task Details</h2>
            <div className="space-y-2">
              <p><strong>Description:</strong> {task.description}</p>
              <p><strong>Priority:</strong> {task.priority}</p>
              <p><strong>Assigned To:</strong> {task.assignedTo}</p>
              <p><strong>Due Date:</strong> {task.dueDate}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Comments</h2>
            <div className="space-y-2">
              {task.comments.map(comment => (
                <div key={comment.id} className="bg-gray-100 p-3 rounded">
                  <p className="font-bold">{comment.author}</p>
                  <p>{comment.text}</p>
                </div>
              ))}
              <textarea 
                placeholder="Add a comment..."
                className="w-full border rounded p-2 mt-2"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                Add Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;