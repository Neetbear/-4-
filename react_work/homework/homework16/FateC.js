import React from 'react';

class Fate extends React.Component {
    constructor(props) {
        super(props);
    };
   
    render() {
        return ( 
            <>
                <h1>Fate Characters!!!</h1>
                {
                    this.props.characters.length > 0 &&
                    <h2>
                        {this.props.characters.length} characters in Fate Stay Night Animation
                    </h2>
                }
            </>            
        )
    }
}

export default Fate;