import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createStore } from 'redux';
import allReducers from './reducers'; //auto look for index.js
import {Provider} from 'react-redux';






//store
const myStore = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



ReactDOM.render(
    <Provider store={myStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

//serviceWorker.unregister();