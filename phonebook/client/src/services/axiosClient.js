import axios from "axios";
// const baseUrl = import.meta.env.VITE_BE_URL + "/api/persons";
// const baseUrl = "http://localhost:3001/api/persons";

const axiosClient = axios.create({
  // baseURL: import.meta.env.VITE_BE_URL,
  baseURL: import.meta.env.VITE_BE_URL || "",
  withCredentials: true,
});

export default axiosClient;
// const getAll = () => {
//   const request = axios.get(baseUrl);
//   return request.then((response) => response.data);
// };

// const create = (newObject) => {
//   const request = axios.post(baseUrl, newObject);
//   return request.then((response) => response.data);
// };

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject);
//   return request.then((response) => response.data);
// };

// const Delete = (id) => {
//   const request = axios.delete(`${baseUrl}/${id}`);
//   return request.then(() => getAll());
// };

// export default {
//   getAll,
//   create,
//   update,
//   Delete,
// };
