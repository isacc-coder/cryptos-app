import React from 'react';
import  ReactDOM  from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './app/store';

import 'antd/dist/antd.css';

ReactDOM.render(
   <Provider store={store}>
<Router>
   <App/>
</Router>
   </Provider>

, document.getElementById('root'));
