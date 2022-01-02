import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './app/store';

ReactDom.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root')); 