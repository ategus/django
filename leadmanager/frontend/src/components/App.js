import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import Header from './layout/Header'
import Dashboard from './leads/Dashboard'




class App extends Component {
    render() {
        //return <h1>React App</h1>
        return (
            <Fragment>
              <Header />
              <dic className="container">
              <Dashboard />
              </dic>
            </Fragment>
            
        )
    }
}


ReactDom.render(<App />, document.getElementById('app'));