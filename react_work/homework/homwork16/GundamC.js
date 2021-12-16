import React from 'react';

// class Gundam extends React.Component {
//     constructor(props) {
//         super(props);
//     };
//     render() {
//         return (
//             <h1>This is {this.props.model} Gundam!!!</h1>
//         );
//     }
// };

// class Gundam extends React.Component {

//     render() {
//         const gundamInfo = {
//             camp: "Earth",
//             model: "X10A",
//             engine: "Atomic",
//             year: "Cosmic 70",
//             pilot: "Kira Yamato"
//         }
//         return (
//             <h2>This is {gundamInfo.model} Gundam!!!</h2>
//         );
//     };
// };

// class GundamA extends React.Component {
//     render() {
//         return (
//             <>
//                 <h1>Which gundam in Archangel?</h1>
//                 <Gundam />
//             </>
//         );
//     };
// };

class Gundam extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2>This is {this.props.model} Gundam!!!</h2>
        );
    };
};

class GundamA extends React.Component {
    render() {
        return (
            <>
                <h1>Which gundam in Archangel?</h1>
                <Gundam model="ZGMF-X10A" />
            </>
        );
    };
};

export default GundamA;