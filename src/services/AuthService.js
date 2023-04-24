import AxiosWrapper from "./BaseService";
const axios = new AxiosWrapper();

export const apiSignUp = async (data) => {
  await axios
    .post(`api/v1/user/signup`, {
      email: data.email,
      password: data.password,
    })
    .then((response) => {
      let token = response.data.token;
      if (response.status === 200) {
        localStorage.setItem("token", token);
      }
      return response.data;
    });
};

export const apiLogin = async (data) => {
  axios
    .post("api/v1/user/signup", {
      email: data.email,
      password: data.password,
    })
    .then((response) => {
      let token = response.data.token;
      if (response.status === 200) {
        localStorage.setItem("token", token);
      }
      return response.data;
    });
};
