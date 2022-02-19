import axios from 'axios';

const AxiosInstance = axios.create({
  //baseURL: 'http://localhost:8080',
  baseURL: 'http://blog.ssssksss.xyz:8080',
  //timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
  //withCredentials: true,
});

AxiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    //토큰 만료 에러가 발생하면 로그인 페이지로 이동시키게 한다.
    return Promise.reject(error);
  }
)

export default AxiosInstance;