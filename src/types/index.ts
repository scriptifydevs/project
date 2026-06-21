// Global TypeScript Interfaces

export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

// Standard Laravel API Response Wrapper
export interface ApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

// Standard Laravel Pagination Response
export interface PaginatedResponse<T> {
  data: T[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}
