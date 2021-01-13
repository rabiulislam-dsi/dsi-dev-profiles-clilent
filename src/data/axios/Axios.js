import axios from "axios";
import Cookies from "js-cookie";

// Request interceptor
axios.interceptors.request.use(
    config => {
        const token = Cookies.get('token');
        if(token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        } else {
            config.headers['Authorization'] = 'Bearer undefined';
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });


//Response interceptor
axios.interceptors.response.use((response) => {
    return response
}, error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && originalRequest.url === '/api/token') {
        return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        return axios({
            method: 'post',
            url: '/api/token',
            auth: {
                username: process.env.REACT_APP_BACKEND_CLIENT_ID,
                password: process.env.REACT_APP_BACKEND_CLIENT_SECRET
            }
        })
            .then(response => {
                if (response.status === 200) {
                    Cookies.set('token', response.data.token, {
                        expires: new Date(response.data.expiresAt),
                        sameSite: 'strict'
                    });
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
                    return axios(originalRequest);
                }
            })
    }
    return Promise.reject(error);
});

export default axios;