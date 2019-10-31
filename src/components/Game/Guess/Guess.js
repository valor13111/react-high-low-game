import React from 'react';

const guess = (props) => (
    <div>
        <button type="button" class="btn btn-success" onClick={() => props.checkAnswer()} >GUESS</button>
    </div>
);

export default guess