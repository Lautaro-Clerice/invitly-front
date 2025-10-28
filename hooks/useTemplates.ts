import { useQuery } from "@tanstack/react-query";
import { getTemplates } from "@/services/templates";
import { Category } from "@/utils/types";

export function useTemplates(categories: Category[]) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["templates", categories],
    queryFn: () => {
      return getTemplates(
        categories.length
          ? { categories: categories.map((cat) => cat.id) }
          : undefined
      );
    },
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error, refetch };
}
