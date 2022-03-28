import {SpecialistModel} from "../models/Specialist.model";
import {MainStore} from "./MainStore";
import {action, makeObservable, observable} from "mobx";

export class SpecialistStore {
    specialists: Array<SpecialistModel>;

    constructor(public mainStore : MainStore) {
        makeObservable(this, {
            specialists: observable,
            addSpecialist: action,
        })

        this.specialists = [
            {
                id: 1,
                department: "Гинекология",
                fullName: "Нигметзянова Альбина Юрьевна"
            },
            {
                id: 2,
                department: "Терапевт",
                fullName: "Анисимова Нина Яковлевна"
            },
            {
                id: 3,
                department: "Эндокринология",
                fullName: "Идиятуллина Эльвира Фанусовна"
            },
            {
                id: 4,
                department: "Кардиология",
                fullName: "Беляева Наиля Фаляховна"
            },
            {
                id: 5,
                department: "Стоматология",
                fullName: "Ильина Инна Юрьевна"
            },
            {
                id: 6,
                department: "Стоматология",
                fullName: "Гранатов Валерий Евгеньевич"
            },
            {
                id: 7,
                department: "Стоматология",
                fullName: "Хурматуллина Айгуль Фанузовна"
            }
        ]

    }

    addSpecialist = (specialist: SpecialistModel) => {
        this.specialists.push(specialist);
    }
}