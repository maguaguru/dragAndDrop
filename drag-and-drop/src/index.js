import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './main/dev/dragAndDrop/app/store/index'
import './index.css';
import App from './main/dev/dragAndDrop/app/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Provider store={store}>
    <h2 className="text-center">Drag&drop question test</h2>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
