import { create } from 'zustand';

// Zustand store
export const useApiStore = create((set) => ({
   apiUrl: null,
   fetchApiUrl: async () => {
      try {
         const res = await fetch('/api/runtime-env');
         const data = await res.json();
         set({ apiUrl: data.NEXT_PUBLIC_API_URL });
      } catch (error) {
         console.error('Failed to fetch API URL:', error);
      }
   },
}));
