import { create } from 'zustand';

interface BearState {
    id: number;
    menuId: number;
    setId: (newId: number) => void;
    setMenuId: (newId: number) => void;
    setMode: (newMode: boolean) => void;
    clearId: () => void;

    mode: boolean;
  }

const useStore = create<BearState>((set) => ({
  id: 0,
  menuId: 0,
  mode: false,
  setId: () => set((state : any) => ({ id: state })),
  setMenuId: () => set((state : any) => ({ menuId: state })),
  clearId: () => set({ id: 0 }),
  setMode: (state: boolean) => set({ mode : state }),
}))

export default useStore;