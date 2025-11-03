import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function useURLParams(paramName: string) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const paramValues =
    searchParams.get(paramName)?.split(",").filter(Boolean) || [];

  const updateParam = (values: string[]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (values.length > 0) {
      params.set(paramName, values.join(","));
    } else {
      params.delete(paramName);
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return {
    paramValues,
    updateParam,
  };
}
