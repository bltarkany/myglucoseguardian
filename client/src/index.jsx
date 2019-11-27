import React from 'react';
import { render } from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "./App/react-auth0-spa";
import history from "./App/utils/history";

const onRedirectCallback = appState => {
    history.push(
    appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
};

render((
    <Auth0Provider
    domain={"frosty-smoke-0050.auth0.com"}
    client_id={"Cn1445IM2oUuQ5Oi9YierfUEF9AfA4VJ"}
    redirect_uri={window.location.origin+"/profile"}
    onRedirectCallback={onRedirectCallback}
    >
    <App />
    </Auth0Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
