import React from 'react';
import './App.sass';
import {Route, Routes} from "react-router-dom";
import {Contacts} from "./app/pages/Contacts";
import {Recommendations} from "./app/pages/Recommendations";
import {ChoiceOfSpecialty} from "./app/pages/Registration/ChoiceOfSpecialty";
import {DoctorSChoice} from "./app/pages/Registration/Doctor'sChoice";
import mainStore from "./app/stores/MainStore";
import {Provider} from "mobx-react";
import {Home} from "./app/pages/Home";
import {DoctorsList} from "./app/pages/DoctorsList";
import {ProfileDoctor} from "./app/pages/Profile/ProfileDoctor";
import {ProfileUser} from "./app/pages/Profile/ProfileUser";
import {DoctorSPatientCard} from "./app/pages/Doctor'sPatientCard";
import urlInterceptor from "./app/stores/interceptors/URLInterceptor";
import {AboutSpecific} from "./app/pages/AboutSpecific";
import errorsInterceptor from "./app/stores/interceptors/ErrorsInterceptor";
import {appointmentPath} from "./app/constants/Paths";

urlInterceptor()
errorsInterceptor()

const App = () => {
    return (
        <Provider {...mainStore}>
            <Routes>
                <Route path='/' caseSensitive element={<Home/>}/>
                <Route path='contacts' caseSensitive element={<Contacts/>}/>
                <Route path='about-specific' caseSensitive element={<AboutSpecific/>}/>
                <Route path='recommendations' caseSensitive element={<Recommendations/>}/>
                <Route path='specialists' caseSensitive element={<DoctorsList/>}/>
                <Route path={appointmentPath} caseSensitive element={<ChoiceOfSpecialty/>}/>
                <Route path={appointmentPath + "/:specialityId/"} caseSensitive element={<DoctorSChoice/>}/>
                <Route path={appointmentPath + "/:doctorId/"} caseSensitive element={<DoctorSChoice/>}/>
                <Route path='card/:userId' caseSensitive element={<DoctorSPatientCard/>}/>
                <Route path='profile-doctor/:doctorId' caseSensitive element={<ProfileDoctor/>}/>
                <Route path='profile-patient/:userId' caseSensitive element={<ProfileUser/>}/>
            </Routes>
        </Provider>
    );
}

export default App;
