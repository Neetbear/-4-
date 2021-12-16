// function Football() {
//     const shoot = (arg) => {
//         alert(arg)
//     };
//     return (
//         <div>
//             <button onClick={() => shoot("The tremendese Goal Son!!!")}>Take the shot!!</button>
//             {/* <button onClick={shoot("The tremendese Goal Son!!!")}>Take the shot!!</button> 새로고침하면 바로 alert창 뜸 버튼안먹고*/}
//         </div>
//     );
// }

function Football() {
    const shoot = (a, e) => {
        alert(a + " " + e.type);
    };

    return (
        <button type="button" onClick={(event) => shoot("The tremendese Goal Son!!!", event)}>Take the shot!</button>
    );
};

export default Football;