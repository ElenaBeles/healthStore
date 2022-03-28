import {SpecialistStore} from "./SpecialistStore";
import {SpecialityStore} from "./SpecialityStore";
import {ModalStore} from "./ModalStore";

class MainStore {
    specialistStore: SpecialistStore;
    specialityStore: SpecialityStore;

    modalStore: ModalStore;
    constructor() {
        this.specialistStore = new SpecialistStore(this);
        this.specialityStore = new SpecialityStore(this);
        this.modalStore = new ModalStore(this);
    }
}

export const mainStore = new MainStore();

export default mainStore;

export { MainStore };