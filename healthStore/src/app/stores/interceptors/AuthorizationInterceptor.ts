import axios from "axios";


const authorizationInterceptor = () => {
    return axios.interceptors.request.use(
        config => {
            const token = localStorage.getItem('token')
            if (token) {
                config.headers!['Authorization'] = 'Bearer ' + token;
            }
            return config
        }, error => {
        }
    )
}

export default authorizationInterceptor;