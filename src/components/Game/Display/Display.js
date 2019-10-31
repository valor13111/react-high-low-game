import React from 'react';

const display = (props) => {
    return (
        <div>
            <h2>
                {props.isDisplayHelpAvailable ?
                    <div>
                        <div className="text-warning">{props.display.temperature}</div> 
                        <div className="text-secondary text-uppercase">{props.display.warning}</div>
                    </div> 
                : null}
            </h2> 
        </div>
    );
}

export default display;