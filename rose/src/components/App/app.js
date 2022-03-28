import React from "react";
import Header from '../Header'
import Footer from '../Footer'

import './app.css'

import "98.css";
import "normalize.css"

const App = () => {
    const styles = {'margin': '32px', 'width': '250px'}
    return (
        <div className="window">
            <Header/>
                <div className="window-body">
                    <button aria-label="Settings" className="button-settings">Настройки</button>
                    <div className="heading-container">
                        <h3>Мои проекты:</h3>
                        <h2>Учу React</h2>
                        {/* <button autoFocus>Учу React</button> */}
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default App;