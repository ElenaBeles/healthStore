import {useContext} from "react";
import {MainStore} from "../stores/MainStore";
import {MobXProviderContext} from "mobx-react";

export const useStores = (): MainStore => {
    return <MainStore>useContext(MobXProviderContext);
}