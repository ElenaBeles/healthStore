import {SpecialityStore} from "./SpecialityStore";
import {ModalStore} from "./ModalStore";
import {UserStore} from "./UserStore";
import {DoctorStore} from "./DoctorStore";

class MainStore {
    doctorStore: DoctorStore;
    specialityStore: SpecialityStore;
    userStore: UserStore;
    modalStore: ModalStore;

    constructor() {
        this.doctorStore = new DoctorStore(this);
        this.specialityStore = new SpecialityStore(this);
        this.modalStore = new ModalStore(this);
        this.userStore = new UserStore(this);
    }
}

export const mainStore = new MainStore();

export default mainStore;

export {MainStore};