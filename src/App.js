import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux';
import './App.css';

import DashboardContainer from './containers/Dashboard';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Fragment>
                <DashboardContainer/>
            </Fragment>
        </Provider>
    );
}

export default App;
