import { getLocalStorage } from "@/utilities/helpers"
import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:9007/api/v1/",
    timeout: 10000,
    timeoutErrorMessage: "Request timed out.....",
    responseType: "json",
    headers: { "Content-Type": "application/json"}
})
// interceptors
axiosInstance.interceptors.request.use((config)=>{
   if(getLocalStorage("_at_46")){
    config["headers"]["Authorization"]="Bearer"+getLocalStorage("_at_46")
   }
    return config
})


// TODO: Request interceptors
// TODO: Custom response type

// response
axiosInstance.interceptors.response.use((response) => {
    return response.data
},
    (exception) => {
        throw {
            response: exception?.response?.data,
            code: exception.status
        }
    })
export default axiosInstance