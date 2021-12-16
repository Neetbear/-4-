// function Gundam (props) {
//     return (
//         <h1>This is {props.model} Gundam!!!</h1>
        
//     );
// }

// function Gundam (props) {
//     return (
//         <h2>This is {props.ginfo.model} Gundam!!!</h2>
//     );
// }

// function GundamA() {
//     const gundamInfo = {
//         camp: "Earth",
//         model: "X10A",
//         engine: "Atomic",
//         year: "Cosmic 70",
//         pilot: "Kira Yamato"
//     }
//     return (
//         <>
//             <h1>Which gundam in Archangel?</h1>
//             <Gundam ginfo={gundamInfo} />
//         </>
//     );
// }
function Gundam (props) {
    return (
        <h2>This is {props.model} Gundam!!!</h2>
    );
}

function GundamA() {
    return (
        <>
            <h1>Which gundam in Archangel?</h1>
            <Gundam model="ZGMF-X10A" />
        </>
    );
}


export default GundamA;