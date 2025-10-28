import { Category } from "@/utils/types";
import { create } from "zustand";

interface CategoriesState {
  selectedCategories: Category[];
  addCategory: (category: Category) => void;
  removeCategory: (idCategory: string) => void;
  resetCategories: () => void;
}
export const useCategoriesStore = create<CategoriesState>((set) => ({
  selectedCategories: [],

  addCategory: (category) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.some(
        (c) => c.id === category.id
      )
        ? state.selectedCategories
        : [...state.selectedCategories, category],
    })),

  removeCategory: (idCategory: string) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.filter(
        (c) => c.id !== idCategory
      ),
    })),

  resetCategories: () => set({ selectedCategories: [] }),
}));
