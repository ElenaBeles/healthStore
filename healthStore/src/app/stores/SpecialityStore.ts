import {MainStore} from "./MainStore";
import {action, makeObservable} from "mobx";
import axios from "axios";

interface IDepartment {
    title: string,
    titleRU: string,
}

export class SpecialityStore {
    constructor(public mainStore: MainStore) {
        makeObservable(this, {
            getDepartments: action,
            getTitleRuFromDepartmentsList: action
        })
    }

    getDepartments(): Promise<Map<string, string>> {
        let departments: Map<string, string> = new Map<string, string>();
        return axios.get("appointment/departments ").then(value => {
            value.data.map((val: any) => {
                departments.set(val.title, val.titleRu)
            })
            return departments
        })
    }

    getTitleRuFromDepartmentsList(title: string) {
        let departments: Map<string, string> = new Map<string, string>();
        return axios.get("appointment/departments ").then(value => {
            value.data.map((val: any) => {
                departments.set(val.title, val.titleRu)
            })
            return departments.get(title)
        })
    }
}