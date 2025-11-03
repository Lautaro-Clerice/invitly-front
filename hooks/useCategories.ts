import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/categories";

export function useCategories() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return getCategories();
    },
    retry: 2,
    staleTime: 1 * 60 * 1000,
  });
  return { data, isLoading, error };
}
