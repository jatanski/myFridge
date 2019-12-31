import React from 'react';
import ReactDOM from 'react-dom';
import './scss/global.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Router from './router/router';

ReactDOM.render(<Router />, document.getElementById('root'));
