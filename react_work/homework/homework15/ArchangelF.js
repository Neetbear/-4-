// 이거 날먹이라 이번 과제 쉬운줄 2...
function Gundam () {
    return (
        <h4>This is Freedom Gundam</h4>
    );
}

function Archangel() {
    return (
        <div>
            <h1>Who lives in ArchAngel???</h1>
            <Gundam />
        </div>
    )
}

export default Archangel;