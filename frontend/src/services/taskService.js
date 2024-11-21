import axios from 'axios';
import authService from './authService';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

class TaskService {
  async getAllTasks(filters = {}) {
    try {
      const response = await axios.get(
        `${API_URL}/tasks`,
        {
          params: filters,
          ...authService.getAuthHeader()
        }
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getTaskById(taskId) {
    try {
      const response = await axios.get(
        `${API_URL}/tasks/${taskId}`,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async createTask(taskData) {
    try {
      const response = await axios.post(
        `${API_URL}/tasks`,
        taskData,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updateTask(taskId, taskData) {
    try {
      const response = await axios.put(
        `${API_URL}/tasks/${taskId}`,
        taskData,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async deleteTask(taskId) {
    try {
      const response = await axios.delete(
        `${API_URL}/tasks/${taskId}`,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async assignTask(taskId, userId) {
    try {
      const response = await axios.post(
        `${API_URL}/tasks/${taskId}/assign`,
        { userId },
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updateTaskStatus(taskId, status) {
    try {
      const response = await axios.patch(
        `${API_URL}/tasks/${taskId}/status`,
        { status },
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async addTaskComment(taskId, comment) {
    try {
      const response = await axios.post(
        `${API_URL}/tasks/${taskId}/comments`,
        { comment },
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getTaskDependencies(taskId) {
    try {
      const response = await axios.get(
        `${API_URL}/tasks/${taskId}/dependencies`,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data.message || 'An error occurred',
      };
    } else if (error.request) {
      return {
        status: 503,
        message: 'Service unavailable. Please try again later.',
      };
    } else {
      return {
        status: 500,
        message: 'An unexpected error occurred.',
      };
    }
  }
}

export default TaskService();