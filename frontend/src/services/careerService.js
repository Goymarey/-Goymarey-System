import axios from 'axios';
import authService from './authService';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

class CareerService {
  async getAllApplications(filters = {}) {
    try {
      const response = await axios.get(
        `${API_URL}/careers/applications`,
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

  async getApplicationById(applicationId) {
    try {
      const response = await axios.get(
        `${API_URL}/careers/applications/${applicationId}`,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async submitApplication(applicationData) {
    try {
      const formData = new FormData();
      
      // Append application data
      Object.keys(applicationData).forEach(key => {
        if (key === 'resume' || key === 'coverLetter') {
          formData.append(key, applicationData[key]);
        } else {
          formData.append(key, JSON.stringify(applicationData[key]));
        }
      });

      const response = await axios.post(
        `${API_URL}/careers/applications`,
        formData,
        {
          ...authService.getAuthHeader(),
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updateApplicationStatus(applicationId, status, notes = '') {
    try {
      const response = await axios.patch(
        `${API_URL}/careers/applications/${applicationId}/status`,
        { status, notes },
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async scheduleInterview(applicationId, interviewData) {
    try {
      const response = await axios.post(
        `${API_URL}/careers/applications/${applicationId}/interviews`,
        interviewData,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getJobPostings(filters = {}) {
    try {
      const response = await axios.get(
        `${API_URL}/careers/jobs`,
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

  async createJobPosting(jobData) {
    try {
      const response = await axios.post(
        `${API_URL}/careers/jobs`,
        jobData,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updateJobPosting(jobId, jobData) {
    try {
      const response = await axios.put(
        `${API_URL}/careers/jobs/${jobId}`,
        jobData,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async deleteJobPosting(jobId) {
    try {
      const response = await axios.delete(
        `${API_URL}/careers/jobs/${jobId}`,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async addInterviewFeedback(applicationId, interviewId, feedback) {
    try {
      const response = await axios.post(
        `${API_URL}/careers/applications/${applicationId}/interviews/${interviewId}/feedback`,
        feedback,
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

export default CareerService();