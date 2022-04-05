import React from "react";
import Header from '../Header'
import Footer from '../Footer'
import SettingsMenu from "../settings";

import './app.css'

// import "normalize.css"

const mode = 'settings';

const App = () => {
    const main = (
        <div className="row vh-100">
            <div className="col-12 text-center py-5 align-self-center">
                <div className="py-5">
                    <h1>Мои проекты:</h1>
                </div>
                <div  className="pb-5">

                    <div className="card text-white bg-success mb-3">
                        <div className="card-header">
                            <h4 className="card-title">Учить React</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Февраль-Апрель 2022</p>
                        </div>
                    </div>
                
                </div>
                <a aria-label="Settings" className="link link-primary text-center" href="/settings">Настройки</a>
            </div>
        </div>    
    )

    const settings = (
        <div className="col-12 text-center py-5 align-self-center"><SettingsMenu/></div>
    )

    return (
        <div className="container-fluid d-flex flex-column vh-100">

            <Header/>

                {settings}
            
            <Footer/>

        </div>
    )
}

export default App;