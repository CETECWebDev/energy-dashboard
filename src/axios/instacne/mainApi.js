import axios from "axios";

const apiRequest = axios.create({
    baseURL: 'http://192.168.1.106:8000/api/',
    headers: {
        "Content-Type": "application/json"
    }
});

export default apiRequest