import axiosInstance from "@/config/axios.config"

export interface IConfigProps {
    params?: any,
    headers?: any,
    hasFile?: boolean

}

class BaseServices {
    private headers: IConfigProps = {}
    private setHeaders(config: IConfigProps = {}) {
        this.headers = {}
        if (config.params) {
            this.headers = {
                ...this.headers,
                params: { ...config.params }
            }
        }
        if (config.headers) {
            this.headers = {
                ...this.headers,
                headers: {
                    ...this.headers.headers,   // keep existing headers
                    "Content-Type":"application/json"
                
                }
            }
        }
        
        if (config.hasFile) {
            this.headers = {
                ...this.headers,
                headers: {
                    ...this.headers.headers,
                    "Content-Type": "multipart/form-data"
                }
            }
        }

    }
    async getRequest(url: string, config: IConfigProps = {}) {
        this.setHeaders(config)
        return await axiosInstance.get(url, this.headers)

    }
    async postRequest(url: string, data: any = {}, config: IConfigProps = {}) {
        console.log("this is config",config);
        
        this.setHeaders(config)
        console.log("This is data form base service for login time",data);
        return await axiosInstance.post(url, data,)
    }

    async putRequest(url: string, data: any = {}, config: IConfigProps = {}) {
        this.setHeaders(config)
        return await axiosInstance.put(url, data,)
    }

    async patchRequest(url: string, data: any = {}, config: IConfigProps = {}) {
        this.setHeaders(config)
        return await axiosInstance.patch(url, data,)
    }

    async deleteRequest(url: string, config: IConfigProps = {}) {
        this.setHeaders(config)
        return await axiosInstance.delete(url,)
    }
}

export default new BaseServices()

