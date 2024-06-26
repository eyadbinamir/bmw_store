import axiosClient from "utils/AxiosClient";

const submit = (data) => {
  const response = axiosClient
    .post(`login`, data)
    .then((resolved) => {
      return resolved.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return response;
};

export default submit;
