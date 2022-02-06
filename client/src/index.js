import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './styles.css';
import * as serviceWorker from './serviceWorker';
import 'materialize-css';
import  'material-design-icons';


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
