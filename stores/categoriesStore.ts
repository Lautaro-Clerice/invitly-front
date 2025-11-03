import { Category } from "@/utils/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface CategoriesState {
  selectedCategories: Category[];
  addCategory: (category: Category) => void;
  removeCategory: (idCategory: string) => void;
  resetCategories: () => void;
}

export const useCategoriesStore = create<CategoriesState>()(
  immer((set) => ({
    selectedCategories: [],

    addCategory: (category) =>
      set((state) => {
        const exists = state.selectedCategories.some(
          (c) => c.id === category.id
        );
        if (!exists) {
          state.selectedCategories.push(category);
        }
      }),

    removeCategory: (idCategory: string) =>
      set((state) => {
        const index = state.selectedCategories.findIndex(
          (c) => c.id === idCategory
        );
        if (index !== -1) {
          state.selectedCategories.splice(index, 1);
        }
      }),

    resetCategories: () =>
      set((state) => {
        state.selectedCategories = [];
      }),
  }))
);
