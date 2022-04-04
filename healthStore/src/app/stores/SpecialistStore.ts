import {SpecialistModel} from "../models/Specialist.model";
import {MainStore} from "./MainStore";
import {action, makeObservable, observable} from "mobx";
import photoDoctorMock from '../assets/img/photoDoctorMock.jpg';

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
                fullName: "Нигметзянова Альбина Юрьевна",
                img: photoDoctorMock
            },
            {
                id: 2,
                department: "Терапевт",
                fullName: "Анисимова Нина Яковлевна",
                img: photoDoctorMock
            },
            {
                id: 3,
                department: "Эндокринология",
                fullName: "Идиятуллина Эльвира Фанусовна",
                img: photoDoctorMock
            },
            {
                id: 4,
                department: "Кардиология",
                fullName: "Беляева Наиля Фаляховна",
                img: photoDoctorMock
            },
            {
                id: 5,
                department: "Стоматология",
                fullName: "Ильина Инна Юрьевна",
                img: photoDoctorMock
            },
            {
                id: 6,
                department: "Стоматология",
                fullName: "Гранатов Валерий Евгеньевич",
                img: photoDoctorMock
            },
            {
                id: 7,
                department: "Стоматология",
                fullName: "Хурматуллина Айгуль Фанузовна",
                img: photoDoctorMock
            }
        ]

    }

    addSpecialist = (specialist: SpecialistModel) => {
        this.specialists.push(specialist);
    }
}