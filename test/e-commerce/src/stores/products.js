import { create } from 'zustand';

const useProductsStore = create((set) => ({
  name: '',
  price: '',
  image: '',
  setName: (text) => set({ name: text }),
  setPrice: (number) => set({ price: number }),
  setImage: (file) => set({ image: file }),
  products: JSON.parse(localStorage.getItem('products')) || [],
  setProducts: (newProduct) =>
    set((prev) => {
      const updatedProducts = [...prev.products, newProduct];
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    }),
}));

export default useProductsStore;
