import apiResponse from "@/utils/api";

export const getCategories = async () => {
  const response = await apiResponse.get("/categories");
  return response.data;
};
