import React from "react";
import Header from '../Header'
import Footer from '../Footer'

import './app.css'

// import "normalize.css"

const App = () => {
    return (
        <div className="container-fluid d-flex flex-column vh-100">

            <Header/>

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
                                <p className="card-text">February-April '22</p>
                            </div>
                        </div>
                    
                    </div>
                <a aria-label="Settings" className="link link-primary text-center">Настройки</a>
                </div>
            </div>    
            
            <Footer/>

        </div>
    )
}

export default App;