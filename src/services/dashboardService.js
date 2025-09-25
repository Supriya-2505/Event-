import { API_BASE_URL } from './config';
import { authService } from './authService';

const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${authService.getToken()}`
});

export const dashboardService = {
  async getDashboardStats() {
    const response = await fetch(`${API_BASE_URL}/events`, {
      headers: getHeaders()
    });
    if (!response.ok) throw new Error('Failed to fetch dashboard stats');
    return response.json();
  }
};
