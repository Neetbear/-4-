function MissGoal() {
    return <h1>Missed Goal Ronaldo</h1>
};

function MadeGoal() {
    return <h1>The tremendese Goal Son!!!</h1>
};

function Goal (props) {
    const isGoal = props.isGoal;

    // if(isGoal) {
    //     return (<MadeGoal/>);
    // }
    // else {
    //     return (<MissGoal/>);
    // }
    return (
        <>
            {isGoal ? <MadeGoal /> : <MissGoal />}
        </>
    );
};

export default Goal;