import React from 'react';

class MissGoal extends React.Component {
    render() {
        return (
            <h1>Missed Goal Ronaldo</h1>
        );
    }
};

class MadeGoal extends React.Component {
    render() {
        return (
            <h1>The tremendese Goal Son!!!</h1>
        );
    }
};

class Goal extends React.Component {
    constructor(props) {
        super(props)
    };
    render() {
        // if(isGoal) {
        //     return (<MadeGoal/>);
        // }
        // else {
        //     return (<MissGoal/>);
        // }
        return (
            <>
                {this.props.isGoal ? <MadeGoal /> : <MissGoal />}
            </>
        );
    };
};

export default Goal;