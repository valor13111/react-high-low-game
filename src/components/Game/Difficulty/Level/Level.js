import React from 'react';

const level = (props) => (
    <div>
        <button type="button" class="btn btn-outline-primary m-1 btn-lg" onClick={() => props.changeDifficulty(props.difficulty)}>
            {props.difficulty}
        </button>
    </div>
);

export default level;