import { create } from 'zustand';

const useCartsStore = create((set) => ({
  carts: { 홍길동: [], 홍길순: [] },
  setCarts: (newCart) =>
    set((prev) => ({
      carts: { ...prev.carts, [newCart]: [] },
    })),
}));

export default useCartsStore;
