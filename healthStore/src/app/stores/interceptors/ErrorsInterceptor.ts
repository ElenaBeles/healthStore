import axios from "axios";

const errorsInterceptor = () => {
    return axios.interceptors.response.use(
        response => response
        , error => {
            alert('Пожалуйста, попробуйте позднее. Ошибка запроса: ' + error.message)
        }
    )
}

export default errorsInterceptor;