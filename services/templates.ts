import apiResponse from "@/utils/api";

export const getTemplates = async (filters?: { categories?: string[] }) => {
  try {
    const params: Record<string, string> = {};

    if (filters?.categories && filters.categories.length > 0) {
      params.category_id = filters.categories.join(",");
    }

    const res = await apiResponse.get("/templates", { params });

    return res.data;
  } catch (error) {
    throw error;
  }
};
