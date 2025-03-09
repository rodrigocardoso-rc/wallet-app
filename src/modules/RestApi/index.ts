import axios from "axios";

type TMethod = "GET" | "POST" | "PUT" | "DELETE"

const BASE_URL = "http://192.168.18.70:3000";

const API = axios.create({
  baseURL: BASE_URL,
});

async function httpMethod<T>(method: TMethod, url: string, body?: any) {
  const response = await API.request<T>({
    method,
    url,
    data: body,
  });

  return response.data;
};

export function httpGet<T>(url: string) { return httpMethod<T>("GET", url) }
export function httpPost<T>(url: string, body: any) { return httpMethod<T>("POST", url, body) }
export function httpPut<T>(url: string, body: any) { return httpMethod<T>("PUT", url, body) }
export function httpDelete<T>(url: string, body?: any) { return httpMethod<T>("DELETE", url, body) }
