import React, { Component} from 'react';
import Header from './Header';
import MemeGenerator from './MemeGenerator';

class MemeContainer extends Component{
    constructor(){
        super()
        this.state ={}
    }

    render(){
        return(
            <div>
                <Header/>
                <MemeGenerator/>
            </div>
        )
    }

}

export default MemeContainer