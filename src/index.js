import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';

import persist_store from './store/persist_store';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './components/Navigation';
import Banner from './components/Banner';
import store from './store/store';

// banner
const bannerContainer=document.getElementById("banner");
const bannerRoot=ReactDOMClient.createRoot(bannerContainer);
bannerRoot.render(
    <Banner/>
)

// main container
const mainViewContainer=document.getElementById("main-view");
const mainViewRoot=ReactDOMClient.createRoot(mainViewContainer);
mainViewRoot.render(
    <Provider store={store}>
        <PersistGate persistor={persist_store}>
            <Navigation/>
        </PersistGate>
    </Provider>
)  