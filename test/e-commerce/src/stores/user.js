import { create } from 'zustand';

const useUserStore = create((set) => ({
  userEmail: '',
  userName: '',
  setUserEmail: (email) => set({ userEmail: email }),
  setUserName: (name) => set({ userName: name }),
}));

export default useUserStore;
