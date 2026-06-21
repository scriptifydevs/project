import { store } from '@/store/store';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

interface RequestOptions extends Omit<RequestInit, 'body'> {
  data?: any;
}

/**
 * Core API Wrapper
 * Automatically handles JSON parsing, Content-Type, and Bearer Tokens from Redux/LocalStorage.
 * "Less Code" approach: You just call `fetchApi('/users')` and it handles the rest.
 */
export async function fetchApi<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  // 1. Get token from Redux or LocalStorage
  const state = store.getState();
  const token = state.auth.token || (typeof window !== 'undefined' ? localStorage.getItem('token') : null);

  // 2. Setup Headers
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');
  headers.set('Accept', 'application/json');

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  // 3. Build Config
  const config: RequestInit = {
    ...options,
    headers,
  };

  if (options.data) {
    config.body = JSON.stringify(options.data);
  }

  // 4. Execute Fetch
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    // Handle 204 No Content
    if (response.status === 204) {
      return {} as T;
    }

    const data = await response.json();

    // Handle Errors (Laravel Validation or Server errors)
    if (!response.ok) {
      // You can dispatch a logout action here if response.status === 401
      throw new Error(data.message || 'API Request Failed');
    }

    return data as T;
  } catch (error) {
    console.error(`[API Error] ${endpoint}:`, error);
    throw error;
  }
}

// Helper methods for less code in components
export const api = {
  get: <T>(url: string, options?: RequestOptions) => fetchApi<T>(url, { ...options, method: 'GET' }),
  post: <T>(url: string, data: any, options?: RequestOptions) => fetchApi<T>(url, { ...options, method: 'POST', data }),
  put: <T>(url: string, data: any, options?: RequestOptions) => fetchApi<T>(url, { ...options, method: 'PUT', data }),
  delete: <T>(url: string, options?: RequestOptions) => fetchApi<T>(url, { ...options, method: 'DELETE' }),
};
