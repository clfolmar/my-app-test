import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Map from './components/Map'
import GeoLocationData from './components/GeoLocationData'
import SearchInput from './components/SearchInput'
import superagent from 'superagent'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
