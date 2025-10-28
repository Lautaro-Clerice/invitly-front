import axios from "axios";

const baseTemplateURL = process.env.NEXT_PUBLIC_API_TEMPLATE_URL;
const apiResponse = axios.create({
  baseURL: baseTemplateURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiResponse;
