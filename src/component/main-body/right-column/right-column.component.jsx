import React from 'react';
import './right-column.styles.scss';

import RigthExperience from './right-experience/right-experience.component';

const RightColumn = () => {
    return (
        <div className="rigth-column">
            <h1>Experience</h1>
            <RigthExperience/>
            <RigthExperience/>
            <RigthExperience/>
        </div>
    )
};

export default RightColumn;