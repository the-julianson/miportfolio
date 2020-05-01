import React from 'react';
import './right-column.styles.scss';

import RigthExperience from './right-experience/right-experience.component';

const RightColumn = () => {
    return (
        <div className="rigth-column">
            <h1>El camino hasta aquí</h1>
            <RigthExperience/>
        </div>
    )
};

export default RightColumn;