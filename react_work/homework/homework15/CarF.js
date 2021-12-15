function Car() {
    const state = {color: "red"}
    return (
        <h1>This is my {state.color} car!!!</h1>
    )
}
function Garage() {
    return (
        <>
            <h1>My Garaege in the wich car!!!</h1>
            <Car />
        </>
    );
}

export default Garage;