import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useURLParams(paramName: string) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParam = useCallback(
    (values: string[]) => {
      const params = new URLSearchParams(searchParams.toString());

      if (values.length > 0) {
        params.set(paramName, values.join(","));
      } else {
        params.delete(paramName);
      }

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams, paramName]
  );

  const getParamValues = useCallback(() => {
    return searchParams.get(paramName)?.split(",").filter(Boolean) || [];
  }, [searchParams, paramName]);

  return {
    updateParam,
    getParamValues,
  };
}
