import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './main/dev/dragAndDrop/app/store/index'

//import { createStore } from 'redux';
//import { mainReducer } from './main/dev/dragAndDrop/app/Redux/index';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
//     serialize: {
//         options: {
//             undefined: true,
//             function: function(fn) { return fn.toString() }
//         }
//     }
// }));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
