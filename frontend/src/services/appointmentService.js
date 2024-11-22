import axios from 'axios';
import authService from './authService';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

class AppointmentService {
  async getAllAppointments(filters = {}) {
    try {
      const response = await axios.get(
        `${API_URL}/appointments`,
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

  async getAppointmentById(appointmentId) {
    try {
      const response = await axios.get(
        `${API_URL}/appointments/${appointmentId}`,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async createAppointment(appointmentData) {
    try {
      const response = await axios.post(
        `${API_URL}/appointments`,
        appointmentData,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updateAppointment(appointmentId, appointmentData) {
    try {
      const response = await axios.put(
        `${API_URL}/appointments/${appointmentId}`,
        appointmentData,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async deleteAppointment(appointmentId) {
    try {
      const response = await axios.delete(
        `${API_URL}/appointments/${appointmentId}`,
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async confirmAppointment(appointmentId) {
    try {
      const response = await axios.post(
        `${API_URL}/appointments/${appointmentId}/confirm`,
        {},
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async rescheduleAppointment(appointmentId, newDateTime) {
    try {
      const response = await axios.post(
        `${API_URL}/appointments/${appointmentId}/reschedule`,
        { dateTime: newDateTime },
        authService.getAuthHeader()
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getAvailableSlots(date) {
    try {
      const response = await axios.get(
        `${API_URL}/appointments/available-slots`,
        {
          params: { date },
          ...authService.getAuthHeader()
        }
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async sendReminder(appointmentId) {
    try {
      const response = await axios.post(
        `${API_URL}/appointments/${appointmentId}/remind`,
        {},
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

export default new AppointmentService();