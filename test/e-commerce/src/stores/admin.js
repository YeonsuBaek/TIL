import { create } from 'zustand';

const useAdminStore = create((set) => ({
  adminID: '',
  adminPW: '',
  setAdminID: (text) => set({ adminID: text }),
  setAdminPW: (pw) => set({ adminPW: pw }),
}));

export default useAdminStore;
