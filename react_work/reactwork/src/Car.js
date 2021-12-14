function Car(props) {
    return <h1>This is my {props.color} car!!!</h1>
}
function Garage() {
    return (
        <>
            <h1>My Garaege in the wich car!!!</h1>
            <Car />
        </>
    );
}
export default Garage; // 사실 명시적으로 export하는거지 어차피 car.js파일을 땡겨오니까 되긴한다