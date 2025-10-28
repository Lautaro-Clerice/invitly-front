import apiResponse from "@/utils/api";
import { ContactFormValues } from "@/utils/validations";

export const postNewInquiry = async (data: ContactFormValues) => {
  try {
    const res = await apiResponse.post("/inquiries", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
