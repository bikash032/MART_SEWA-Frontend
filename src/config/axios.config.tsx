import axios from "axios"


const axiosInstance= axios.create({
    baseURL:"http://localhost:9007/api/v1/",
    timeout:10000,
    timeoutErrorMessage:"Request timed out.....",
    responseType:"json",
    headers: { "Content-Type": "multipart/form-data" }
})
export default axiosInstance