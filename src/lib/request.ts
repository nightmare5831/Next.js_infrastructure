import axios, { AxiosRequestConfig } from 'axios'

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE_URL || '',
})

const Request = {
  Get: async (url: string) => {
    return await Axios.get(url).then((res) => res.data)
  },
  Post: async (url: string, body?: any, options?: AxiosRequestConfig) => {
    return await Axios.post(url, body, options).then((res) => res.data)
  },
  Put: async (url: string, body: any) => {
    return await Axios.put(url, body).then((res) => res.data)
  },
  Delete: async (url: string) => {
    return await Axios.delete(url).then((res) => res.data)
  },
}

export default Request