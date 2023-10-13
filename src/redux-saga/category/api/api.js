import axios from "axios";
import { BASE_URL, GET_CATEGORY, POST_CATEGORY } from "../../constant";

export function getCategory() {
  const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  return axios
    .get(BASE_URL + GET_CATEGORY, header)
    .then((res) => {
      console.log(res, "res from api");
      const data = res.data;
      const status = res.status;
      return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
}

// Post Category data
export async function postCategory(data) {
  console.log(data, "this is data is from api side");
  const header = {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  return axios
    .post(BASE_URL + POST_CATEGORY, data, header)
    .then((res) => {
      // //console.log(res, "this is console res"
      const data = res.data;
      const status = res.status;
      return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
}