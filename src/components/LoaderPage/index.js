import React from 'react';

import { Preloader } from '../../components';

import './LoaderPage.css';

class LoaderPage extends React.Component {
    render() {
        return (
            <div className="loader-page">
                <Preloader size={100}/>
                <h1 className="loader-page__title display">Приложение запускается</h1>
            </div>
        );
    }
}

export default LoaderPage;
