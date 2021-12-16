import React from 'react';

class Gundam extends React.Component {
    render() {
        const gundams = [
            {id:1, model:"ZGMF-X10A Freedom Gundam"},
            {id:2, model:"ZGMF-X109 Justice Gundam"},
            {id:3, model:"Sword Strike Gundam"}
        ]
        const gundamList = gundams.map((gundam) => <li>This is {gundam.id + " " +gundam.model}</li>)
        return (
            <>{gundamList}</>
        );
    };
};

class Archangel extends React.Component {
    render() {
        return (
            <>
                <h1>Which Gundam lives in Archangel???</h1>
                <ul>
                    <Gundam />
                </ul>
            </>
        );
    };
};

export default Archangel;