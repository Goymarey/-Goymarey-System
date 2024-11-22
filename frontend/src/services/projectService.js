import axios from 'axios';
import authService from './authService';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

class ProjectService {
  async getAllProjects(filters = {}) {
    try {
      const response = await axios.get(
        `${API_URL}/projects`,
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

  async getProjectById(projectId) {
    try {
      const response = await axios.get(
        `${API_URL}/projects/${projectId}`,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async createProject(projectData) {
    try {
      const response = await axios.post(
        `${API_URL}/projects`,
        projectData,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updateProject(projectId, projectData) {
    try {
      const response = await axios.put(
        `${API_URL}/projects/${projectId}`,
        projectData,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async deleteProject(projectId) {
    try {
      const response = await axios.delete(
        `${API_URL}/projects/${projectId}`,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async addProjectMember(projectId, userId, role) {
    try {
      const response = await axios.post(
        `${API_URL}/projects/${projectId}/members`,
        { userId, role },
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async removeProjectMember(projectId, userId) {
    try {
      const response = await axios.delete(
        `${API_URL}/projects/${projectId}/members/${userId}`,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getProjectMetrics(projectId) {
    try {
      const response = await axios.get(
        `${API_URL}/projects/${projectId}/metrics`,
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

export default new ProjectService();