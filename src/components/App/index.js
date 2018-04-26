import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import { Footer, Logo, Navigation } from '../../components';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navigation type="teacher"/>
                    <Logo/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
