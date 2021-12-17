import React from 'react';

// class Football extends React.Component {
//     render() {
//         const shoot = (arg) => {
//             alert(arg);
//         };
//         return (
//             <button onClick={() => shoot("The tremendese Goal Son!!!")}>Take the shot!!</button>
//         );
//     };
// };

class Football extends React.Component {
    render() {
        const shoot = (a, e) => {
            alert(a + " " + e.type);
        };
        return (
            <button type="button" onClick={(event) => shoot("The tremendese Goal Son!!!", event)}>Take the shot!</button>
        );
    };
};

export default Football;