import React from "react";

const withTopButtons = (Component) => {
    return (
        <>
            <button className="btn btn-secondary">Kiss me</button>
            <div>
                <Component/>
            </div>
        </>
    )
}

export default withTopButtons;
