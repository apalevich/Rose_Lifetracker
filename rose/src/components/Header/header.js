import React from "react";

const Header = () => {
    return (
        <div className="row py-2 bg-dark ">
            <div className="col text-left align-self-center">Welcome, Artyom</div>
            <div className="col text-end">
                <button className="btn btn-secondary" aria-label="help">Помощь</button>
            </div>
        </div>
    )
}

export default Header;