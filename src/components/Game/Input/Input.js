import React from 'react';

import './Input.css';

const input = (props) => (
    <div className="form-row m-3">
        <div className="col-5"></div>
        <div className="col-2">
            <input 
                type="number" 
                className="form-control" 
                placeholder="Enter a Number" 
                onChange={(e) => props.onChangeValue(e)} 
            />
        </div>
        <div className="col-5"></div>
    </div>
);

export default input