import axios from 'axios';


const axiosHttp = axios.create({
    baseURL: '/'
});



axiosHttp.interceptors.request.use(function (config) {
    let header = localStorage.getItem('access_token');
    if (header != null) {
        config.headers['Authorization'] = 'Bearer ' + header;
        config.headers['AppId'] = localStorage.getItem('AppId');
    }

    return config;
}, function (error) {

    return Promise.reject(error);
});

export { axiosHttp };
