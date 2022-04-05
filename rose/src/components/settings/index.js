import React from "react";
import Activities from "./activities";
import Areas from "./areas";
import Types from "./types";

const SettingsMenu = () => {
    return (
        <div>
            <h1>Настройки</h1>
            <div className="d-grid gap-2">
                <button className="btn btn-primary btn-lg" onClick={()=>{<Activities/>}}>Сферы</button>
                <button className="btn btn-primary btn-lg" onClick={()=>{<Areas/>}}>Тип активности</button>
                <button className="btn btn-primary btn-lg" onClick={()=>{<Types/>}}>Деятельность</button>
            </div>
        </div>
    )
}

export default SettingsMenu;