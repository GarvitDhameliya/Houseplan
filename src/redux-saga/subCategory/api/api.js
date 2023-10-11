import axios from "axios";
import { BASE_URL, GET_SUB_CATEGORY } from "../../constant";

export function getSubCategory() {
  const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  return axios
    .get(BASE_URL + GET_SUB_CATEGORY, header)
    .then((res) => {
      console.log(res, "subcategory api responce");
      const status = res.status;
      const data = res.data;
      return { status, data };
    })
    .catch((error) => console.log(error));
}
