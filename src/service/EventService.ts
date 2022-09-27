import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://mixcart.com.tr",
  withCredentials: false,
});

export default {
  getEvent(url: string) {
    return apiClient.get(url);
  },
  getCardDetials(url: string, id: number) {
    return apiClient.get(url + id);
  },
};
