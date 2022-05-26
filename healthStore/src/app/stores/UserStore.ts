import {MainStore} from "./MainStore";
import {action, makeAutoObservable, observable} from "mobx";
import axios from "axios";
import authorizationInterceptor from "./interceptors/AuthorizationInterceptor";
import {UserModel} from "../models/UserModel";

export class UserStore {
    isAuth: string | null = localStorage.getItem('token') ? localStorage.getItem('token') : null

    constructor(public mainStore: MainStore) {
        makeAutoObservable(this,
            {
                isAuth: observable,
                authorization: action,
                registration: action,
                logOut: action,
                getUserId: action,
                getProfile: action,
                updateProfile: action
            }
        )
    }

    authorization(user: UserModel) {
        return axios.post("users/login", user)
            .then((res: any) => {
                const token = res.data.accessToken.split(' ').slice(-1)
                window.localStorage.setItem("token", token)
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