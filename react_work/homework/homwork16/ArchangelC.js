import React from 'react';

function Gundam (props) {
    return (<li>This is {props.id + " " + props.model}</li>);
}

// function Archangel() {
//     const gundamList = [
//         "ZGMF-X10A Freedom Gundam", 
//         "ZGMF-X109 Justice Gundam", 
//         "Strike Gundam"
//     ]
//     return (
//         <>
//             <h1>Which Gundam lives in Archangel???</h1>
//             <ul>
//                 {gundamList.map((robot) => <Gundam model={robot} />)}
//             </ul>
//         </>
//     );
// }

function Archangel () {
    const gundams = [
        {id:1, model:"ZGMF-X10A Freedom Gundam"},
        {id:2, model:"ZGMF-X109 Justice Gundam"},
        {id:3, model:"Sword Strike Gundam"}
    ];
    return (
        <>
            <h1>Which Gundam lives in Archangel???</h1>
            <ul>
                {gundams.map((mobileSuite) => <Gundam id={mobileSuite.id} model={mobileSuite.model}/>)}
            </ul>
        </>
    );
};

export default Archangel;