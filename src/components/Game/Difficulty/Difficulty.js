import React from 'react';

import Level from './Level/Level';

const difficulty = (props) => (
    <div class="btn-group" role="group">
        <Level difficulty={"Easy"} changeDifficulty={props.changeDifficulty} />
        <Level difficulty={"Medium"} changeDifficulty={props.changeDifficulty} />
        <Level difficulty={"Hard"} changeDifficulty={props.changeDifficulty} />
    </div>
);

export default difficulty;