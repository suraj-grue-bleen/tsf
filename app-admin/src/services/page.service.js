import axios from "axios";
const env = process.env;
const API_BASE_URL = env.REACT_APP_API_FULL_URL;

const pageList = async (data) => {
  return axios({
    url: `${API_BASE_URL}admin/pageList`,
    data: data,
    method: "GET",
  });
};

const pageService = {
  pageList,
};

export default pageService;
