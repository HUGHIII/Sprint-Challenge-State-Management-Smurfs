import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {smurfReducer} from './components/reducer/smurfReducer';


import "./index.css";
import App from "./components/App";

const store = createStore(smurfReducer,applyMiddleware(thunk, logger));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
