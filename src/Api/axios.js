import axios from "axios";

const axiosInstance = axios.create({
  // firebase deployed
  // baseURL : "https://api-gzaowg74wq-uc.a.run.app"
  //  using render
  // baseURL :'https://amazone-api.onrender.com'
  // baseURL: "http://127.0.0.1:5001/clone-cc971/us-central1/api",
  baseURL: "https://amazon-backend-deployment-mxtj.onrender.com",
});


export { axiosInstance };
