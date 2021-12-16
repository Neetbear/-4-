import React from 'react';

class Gundam extends React.Component {
    render() {
        return <h4>This is Freedom Gundam</h4>
    }
}

class Archangel extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in ArchAngel???</h1>
                <Gundam />
            </div>
        );
    }
}

export default Archangel;