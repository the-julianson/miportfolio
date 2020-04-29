import React from 'react';
import './left-column.styles.scss';
import LeftFirst from './left-first/left-first.component';
import LeftSecond from './left-second/left-second.component';
import LeftThird from './left-third/left-third.component';



class LeftColumn extends React.Component {
    constructor (){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="left-column">
                <LeftFirst color="black"/>
                <LeftSecond color="black"/>
                <LeftThird color="black"/>
            </div>
        );
    }
} 

export default LeftColumn;