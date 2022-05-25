import {MainStore} from "./MainStore";
import {action, makeObservable} from "mobx";
import axios from "axios";
import authorizationInterceptor from "./interceptors/AuthorizationInterceptor";
import {DoctorModel} from "../models/Doctor.model";

export class DoctorStore {
    constructor(public mainStore: MainStore) {
        makeObservable(this, {
            registrationDoctor: action,
            getDoctorsList: action
        })
    }

    registrationDoctor(user: any) {
        axios.post("doctors/sign-up", user, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then((res: any) => {
                const {token, ...data} = res;
                window.localStorage.setItem("token", res.token)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    getDoctorsList(): Promise<any> {
        authorizationInterceptor()

        return axios.get("info", {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
    }

    authorization(user: DoctorModel) {
        return axios.post("users/login", user)
            .then((res: any) => {
                const token = res.data.accessToken.split(' ').slice(-1)
                window.localStorage.setItem("token", token)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    getProfile(): Promise<any> {
        authorizationInterceptor()
        return axios.get("doctors/" + window.localStorage.getItem('id'))
    }

    getReviews(): Promise<any> {
        return axios.get("info/" + window.localStorage.getItem('id'))
    }

    getDoctorsFromDepartment(department: string): Promise<any> {
        return axios.get("appointment/" + department)
    }
}