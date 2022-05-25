import axios from "axios";
import {API_URL} from "../../constants/API";

const urlInterceptor = () => {
    return axios.interceptors.request.use(
        config => {
            config.url = API_URL + config.url
            return config
        }, error => {
            console.log("error")
        }
    )
}

export default urlInterceptor;