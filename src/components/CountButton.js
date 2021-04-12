// This file is used to play around with the Pre-commit Hook of Prettier

import React, { Component } from 'react';

class CountButton extends Component {
    constructor(            ) {
        super();
        this.state = {         count: 0       }
    }
    
    incrementByOne = () => {
        this.setState(prevState => ({            count: prevState.count + 1
        }));
    }

    render() {        return (
            <div>
                <button onClick={
                    this.incrementByOne} >
                        {`Count: ${this.state.count}`}</button>
            </div>
        )
    }
}

export default CountButton;