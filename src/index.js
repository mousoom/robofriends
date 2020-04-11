import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './containers/Apps';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<Apps />, document.getElementById('root'));
serviceWorker.register();