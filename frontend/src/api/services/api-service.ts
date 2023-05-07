interface ApiResponse<T> {
  status: number;
  body: T;
}

class ApiService {
    constructor(private baseUrl: string) {}
  
    async get(endpoint: string) {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      if (!response.ok) {
        throw new Error(`ApiService get request failed: ${response.statusText}`);
      }
      return await response.json();
    }
  
    async post<T>(endpoint: string, data: T) {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`ApiService post request failed: ${response.statusText}`);
      }
      return await response.json();
    }
  }
  
  export default ApiService;