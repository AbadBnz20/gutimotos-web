import axios from 'axios';


const gutiMotors = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

gutiMotors.interceptors.request.use(config => {
    const accessToken = localStorage.getItem('token-access');
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

export {gutiMotors};