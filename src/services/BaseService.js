import axios from "axios";
const { REACT_APP_BASE_URL } = process.env;

export default class AxiosWrapper {
  constructor() {
    this.baseURL = REACT_APP_BASE_URL;
  }

  async get(endpoint) {
    return axiosContentWrapper().get(this.baseURL + endpoint);
  }

  async put(endpoint, data, contentType) {
    return this._send("put", endpoint, data, contentType);
  }

  async post(endpoint, data, contentType) {
    return this._send("post", endpoint, data, contentType);
  }

  async delete(endpoint, data, contentType) {
    return this._send("delete", endpoint, data, contentType);
  }

  _send(method, endpoint, data, contentType) {
    switch (method) {
      case "put":
        return axiosContentWrapper(contentType).put(
          this.baseURL + endpoint,
          data
        );
      case "post":
        return axiosContentWrapper(contentType).post(
          this.baseURL + endpoint,
          data
        );
      case "delete":
        return axiosContentWrapper(contentType).delete(
          this.baseURL + endpoint,
          data
        );
      default:
        return;
    }
  }
}

const axiosContentWrapper = (contentType = "application/json") => {
  const axiosInstance = axios.create({
    baseURL: REACT_APP_BASE_URL,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        config.headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": contentType,
        };
      }
      return config;
    },
    (error) => {
      console.log("some error occured", error);
    }
  );
  return axiosInstance;
};
