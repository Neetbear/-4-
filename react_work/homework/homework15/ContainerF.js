import React, { useEffect, useState } from 'react';

function Child () {
    useEffect(() => {
      return ()=>{
        alert("The component named Header is about to be unmounted.")
      }
    },[])
    return (<h1>Hello World!!!</h1>);
}
function Container() {
    const [show, setMessage] = useState(true);
    const delHandler = () => setMessage(false);
    let myheader = <Child />;
    if(show) {
        return (
            <div>
                {myheader}
                <button type="button" onClick={delHandler}>Delete Handler</button>
            </div>
        )
    }
}

export default Container;