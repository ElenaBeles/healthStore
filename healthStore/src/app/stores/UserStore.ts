import {MainStore} from "./MainStore";
import {makeAutoObservable} from "mobx";
import axios from "axios";
import authorizationInterceptor from "./interceptors/AuthorizationInterceptor";
import {UserModel} from "../models/UserModel";

export class UserStore {

    constructor(public mainStore: MainStore) {
        makeAutoObservable(this)
    }

    authorization(user: UserModel) {
        return axios.post("users/login", user)
            .then((res: any) => {
                const token = res.data.accessToken.split(' ').slice(-1)
                window.localStorage.setItem("token", token)
            })
    }

    refreshToken(user: UserModel) {
        authorizationInterceptor()
        return axios.post("token/refresh", {
            "accessToken": localStorage.getItem('token'),
            //"refreshToken": "e70af8c4-a485-40a9-b45a-25b9bdbcff0f"
        })
            .then((res: any) => {
            })
            .catch((err) => {
                console.log(err);
            })
    }


    registration(user: any) {
        authorizationInterceptor()

        return axios.post("patients/sign-up", user, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then((res: any) => {
            })
            .catch((err) => {
                console.log(err);
            })
    }


    getUserId(): Promise<number> {
        return axios.get("token/user-info", {
            params: {
                token: localStorage.getItem('token')
            }
        })
            .then(value => {
                const id = value.data
                window.localStorage.setItem("id", id)
                return id
            })
    }

    getProfile(): Promise<any> {
        authorizationInterceptor()
        return axios.get("patients/profile/" + window.localStorage.getItem('id'))
    }

    updateProfile(user: UserModel) {
        authorizationInterceptor()
        const password = "qweqwe"
        const id = localStorage.getItem('id')
        const token = localStorage.getItem('token')

        return axios.put("patients/" + id, user)
    }

    logOut(): Promise<any> {
        authorizationInterceptor()
        return axios.get('users/logout')
            .then(
                () => {
                    localStorage.clear()
                })
    }
}