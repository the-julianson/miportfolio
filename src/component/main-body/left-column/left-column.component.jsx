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
                <LeftFirst color="black" height={1}/>
                <LeftSecond color="black" height={1}/>
                <LeftThird color="black" height={1}/>
            </div>
        );
    }
} 

export default LeftColumn;