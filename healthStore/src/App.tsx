import React from 'react';
import './App.sass';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutUs} from "./app/pages/Abot_Us";
import {Header} from "./app/component/Header";
import {Contacts} from "./app/pages/Contacts";
import {Recommendations} from "./app/pages/Recommendations";
import {ChoiceOfSpecialty} from "./app/pages/Registration/ChoiceOfSpecialty";
import {DoctorSChoice} from "./app/pages/Registration/Doctor'sChoice";
import mainStore from "./app/stores/MainStore";
import {Provider} from "mobx-react";
import {Footer} from "./app/component/Footer";
import {Home} from "./app/pages/Home";
import {DoctorsList} from "./app/pages/DoctorsList";
import {ProfileDoctor} from "./app/pages/Profile/ProfileDoctor";

function App() {
  return (
      <BrowserRouter>
          <Provider {...mainStore}>
              <Routes>
                  <Route path='/' caseSensitive element={<Home />}/>
                  <Route path='about_us' caseSensitive element={<AboutUs />}/>
                  <Route path='contacts' caseSensitive element={<Contacts />}/>
                  <Route path='recommendations' caseSensitive element={<Recommendations />}/>
                  <Route path='specialists' caseSensitive element={<DoctorsList />}/>
                  <Route path='make_an_appointment' caseSensitive element={<ChoiceOfSpecialty />}/>
                  <Route path='make_an_appointment/:specialityId/' caseSensitive element={<DoctorSChoice />}/>
                  <Route path='profile' caseSensitive element={<ProfileDoctor />}/>

              </Routes>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
