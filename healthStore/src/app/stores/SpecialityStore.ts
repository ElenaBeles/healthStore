import {MainStore} from "./MainStore";
import {action, makeObservable, observable} from "mobx";
import {SpecialityModel} from "../models/SpecialityModel";

export class SpecialityStore {
    speciality: Array<SpecialityModel>;

    constructor(public mainStore : MainStore) {
        makeObservable(this, {
            speciality: observable,
            addSpecialist: action,
        })

        this.speciality = [
            {
                id: 1,
                title: "Стоматология"
            },
            {
                id: 2,
                title: "Хирургия"
            },
            {
                id: 3,
                title: "Гинекология"
            },
            {
                id: 4,
                title: "Терапевтия"
            },
        ]

    }

    addSpecialist = (speciality: SpecialityModel) => {
        this.speciality.push(speciality);
    }
}