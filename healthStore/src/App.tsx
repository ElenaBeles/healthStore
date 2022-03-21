import React from 'react';
import './App.sass';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutUs} from "./app/pages/Abot_Us";
import {Header} from "./app/component/Header";
import {Contacts} from "./app/pages/Contacts";
import {Recommendations} from "./app/pages/Recommendations";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path='/about_us' caseSensitive element={<AboutUs />}/>
              <Route path='/contacts' caseSensitive element={<Contacts />}/>
              <Route path='/recommendations' caseSensitive element={<Recommendations />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
