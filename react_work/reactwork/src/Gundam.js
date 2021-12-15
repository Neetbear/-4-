import React from "react";

class Gundam extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            camp: "Earth",
            model: "X109",
            engine: "Atomic",
            pilot: "Yamato"
        };
    }

    render() {
        return (
        <div>
            <h1>{this.state.model}</h1>
            <h2>The camp is {this.state.camp}</h2>
            <h2>The engine is {this.state.engine}</h2>
            <h2>The Pilot name is {this.state.pilot}</h2>
        </div>
        )
    }
}

export default Gundam;