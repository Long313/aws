import { create } from 'zustand';

interface BearState {
    id: number;
    menuId: number;
    setId: (newId: number) => void;
    setMenuId: (newId: number) => void;
    clearId: () => void;
  }

const useBearStore = create<BearState>((set) => ({
  id: 0,
  menuId: 0,
  setId: () => set((state : any) => ({ id: state })),  setId: () => set((state : any) => ({ id: state })),
  setMenuId: () => set((state : any) => ({ menuId: state })),
  clearId: () => set({ id: 0 }),
}))

export default useBearStore;