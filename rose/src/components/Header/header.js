import React from "react";

const Header = () => {
    return (
        <div className="title-bar">
            <div className="title-bar-text">Welcome, Artyom</div>
            <div className="title-bar-controls">
                <button aria-label="Help"></button>
            </div>
        </div>
    )
}

export default Header;