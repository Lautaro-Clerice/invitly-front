"use client";
import { useCategories } from "@/hooks/useCategories";
import { useCategoriesStore } from "@/stores/categoriesStore";
import { Category } from "@/utils/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";

export function CategorySelect() {
  const t = useTranslations("Templates");
  const { data: categories } = useCategories();

  const addCategory = useCategoriesStore((state) => state.addCategory);
  const selectedCategories = useCategoriesStore(
    (state) => state.selectedCategories
  );
  const removeCategory = useCategoriesStore((state) => state.removeCategory);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateURL = (categoryIds: string[]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (categoryIds.length > 0) {
      params.set("categories", categoryIds.join(","));
    } else {
      params.delete("categories");
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleAddCategory = (displayName: string) => {
    const catObj = categories?.find(
      (cat: Category) => cat.display_name === displayName
    );

    if (catObj) {
      addCategory(catObj);

      const newSelected = [...selectedCategories, catObj]
        .map((c) => c.id)
        .filter((v, i, arr) => arr.indexOf(v) === i);

      updateURL(newSelected);
    }
  };

  const handleRemoveCategory = (idCategory: string) => {
    removeCategory(idCategory);

    const newSelected = selectedCategories
      .filter((c) => c.id !== idCategory)
      .map((c) => c.id);

    updateURL(newSelected);
  };

  useEffect(() => {
    if (!categories) return;

    const params = new URLSearchParams(searchParams.toString());
    const ids = params.get("categories")?.split(",").filter(Boolean) || [];

    ids.forEach((id) => {
      if (!selectedCategories.some((c) => c.id === id)) {
        const cat = categories.find((c: Category) => c.id === id);
        if (cat) addCategory(cat);
      }
    });
  }, [categories]);

  if (!categories) return null;
  return (
    <div>
      <Select onValueChange={handleAddCategory} aria-label={t("filterValue")}>
        <SelectTrigger className="w-60">
          <SelectValue placeholder={t("filterValue")} />
        </SelectTrigger>
        <SelectContent className="w-60">
          {categories.map((cat: Category) => (
            <SelectItem key={cat.id} value={cat.display_name}>
              {cat.display_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedCategories.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {selectedCategories.map((cat) => (
            <Badge key={cat.id} className="flex items-center gap-1">
              {cat.display_name}
              <button
                type="button"
                className="ml-1 rounded-full hover:bg-white/20 transition-colors p-0.5"
                onClick={() => handleRemoveCategory(cat.id)}
                aria-label={`Remove ${cat.display_name} filter`}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
