import { Provider } from 'react-redux'
import store from './store';
import RouterContainer from './router';
import React from 'react';
import ReactDOM from 'react-dom';


let render = (routerKey = null) => {
  ReactDOM.render(
    <Provider store={store}>
    	<RouterContainer />
    </Provider>, document.getElementById('root'))
}

store.subscribe(render);

render()