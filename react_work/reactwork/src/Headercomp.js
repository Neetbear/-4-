import React from "react";

// class Headercomp extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {headertitel: "This is My page of header"};
//     }

//     // static getDerivedStateFromProps(props, state) {
//     //     return {headertitel: props.newTitle};
//     //     // state.headertitel = props.newTitle;
//     //     // return state.headertitel;
//     // }

//     render() {
//         return (
//             <h1>{this.state.headertitel}</h1>
//         );
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({headertitel: "componentDidMount title!!!"})
//         }, 5000);
//     }
// }

class Headercomp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {headertitle: "This is My page of header"};
    }

    // static getDerivedStateFromProps(props, state) {
    //     return {headertitle: props.newTitle};
    //     // state.headertitel = props.newTitle;
    //     // return state.headertitel;
    // }

    // changeHeaderTitle = () => {
    //     this.setState({headertitle: "changeHeaderTitle Title!!!"})
    // }

    // shouldComponentUpdate() {
    //     return true;
    // }

    componentDidMount() {
        setTimeout(() => {
            this.setState({headertitle: "componentDidMount title!!!"})
        }, 2000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML = 
        "Before update title is " + prevState.headertitle + ", Before update newtitle is " + prevProps.newTitle;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = 
        "The update title is " + this.state.headertitle;
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.headertitle}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
                {/* <button type="button" onClick={this.changeHeaderTitle}>Change Title</button> */}
            </div>
        );
    }
}

export default Headercomp;