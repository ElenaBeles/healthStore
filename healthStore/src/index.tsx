import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ModalConstructor} from "./app/component/Modals/ModalConstructor";
import {Provider} from 'mobx-react';
import mainStore from "./app/stores/MainStore";
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Provider {...mainStore}>
            <Router>
                <App/>
                <ModalConstructor/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
