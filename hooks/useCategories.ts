import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/categories";

export function useCategories() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return getCategories();
    },
  });
  return { data, isLoading, error };
}
