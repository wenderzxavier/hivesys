import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './views/App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Portfolio from './views/Portfolio'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' render={() => (
                <App />
            )}/>
            <Route exact path='/portfolio' render={() => (
               <Portfolio /> 
            )} />          
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
