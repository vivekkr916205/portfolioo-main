// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://vivek-portfolio-api.onrender.com/api';

// API Service
class ApiService {
  // Create status check (contact form submission)
  async createStatusCheck(data) {
    try {
      const response = await fetch(`${API_BASE_URL}/status`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error Response:', errorData);
        throw new Error(errorData.detail || 'Failed to submit form');
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Get all status checks
  async getStatusChecks() {
    try {
      const response = await fetch(`${API_BASE_URL}/status`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch status checks');
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Health check
  async healthCheck() {
    try {
      const response = await fetch(`${API_BASE_URL}/`);
      
      if (!response.ok) {
        throw new Error('Health check failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Health Check Error:', error);
      throw error;
    }
  }
}

export default new ApiService();
