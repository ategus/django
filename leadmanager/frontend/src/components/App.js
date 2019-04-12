import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Header from './layout/Header'

class App extends Component {
    render() {
        //return <h1>React App</h1>
        return (
            <Header />
        )
    }
}


ReactDom.render(<App />, document.getElementById('app'));