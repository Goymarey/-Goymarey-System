import React, { useState } from 'react';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  AlertTriangleIcon,
  PlusIcon 
} from 'lucide-react';

const TaskStatus = {
  COMPLETED: 'Completed',
  IN_PROGRESS: 'In Progress',
  PENDING: 'Pending',
  OVERDUE: 'Overdue'
};

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Design User Interface',
      project: 'Customer Portal Redesign',
      assignedTo: 'John Doe',
      status: TaskStatus.IN_PROGRESS,
      priority: 'High',
      dueDate: '2024-02-15'
    },
    {
      id: 2,
      title: 'Backend API Development',
      project: 'Mobile App Development',
      assignedTo: 'Jane Smith',
      status: TaskStatus.PENDING,
      priority: 'Medium',
      dueDate: '2024-02-20'
    },
    {
      id: 3,
      title: 'User Testing',
      project: 'E-commerce Platform',
      assignedTo: 'Mike Johnson',
      status: TaskStatus.OVERDUE,
      priority: 'High',
      dueDate: '2024-01-30'
    },
    {
      id: 4,
      title: 'Database Migration',
      project: 'Internal HR System',
      assignedTo: 'Sarah Williams',
      status: TaskStatus.COMPLETED,
      priority: 'Low',
      dueDate: '2024-01-25'
    }
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case TaskStatus.COMPLETED:
        return <CheckCircleIcon className="text-green-500" />;
      case TaskStatus.IN_PROGRESS:
        return <ClockIcon className="text-blue-500" />;
      case TaskStatus.PENDING:
        return <ClockIcon className="text-yellow-500" />;
      case TaskStatus.OVERDUE:
        return <AlertTriangleIcon className="text-red-500" />;
      default:
        return null;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Task Management</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center">
          <PlusIcon className="mr-2" size={20} />
          Create New Task
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-4 text-left">Task Title</th>
              <th className="p-4 text-left">Project</th>
              <th className="p-4 text-left">Assigned To</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Priority</th>
              <th className="p-4 text-left">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-b hover:bg-gray-50">
                <td className="p-4 flex items-center">
                  {getStatusIcon(task.status)}
                  <span className="ml-2">{task.title}</span>
                </td>
                <td className="p-4">{task.project}</td>
                <td className="p-4">{task.assignedTo}</td>
                <td className="p-4">
                  <span 
                    className={`
                      px-3 py-1 rounded-full text-xs font-semibold
                      ${task.status === TaskStatus.COMPLETED ? 'bg-green-100 text-green-800' : 
                        task.status === TaskStatus.IN_PROGRESS ? 'bg-blue-100 text-blue-800' :
                        task.status === TaskStatus.PENDING ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}
                    `}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="p-4">
                  <span 
                    className={`
                      px-3 py-1 rounded-full text-xs font-semibold 
                      ${getPriorityColor(task.priority)}
                    `}
                  >
                    {task.priority}
                  </span>
                </td>
                <td className="p-4">{task.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;