import React from 'react'
import { render } from 'react-dom' 
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import App from './Components/App'
import configureStore  from './Store/ConfigureStore'

const store = configureStore()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)