import { useState, useEffect } from "react";

function UseEffect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `My react learning project: ${count}`;
    },[count]);

    function addCount(){
        setCount(c => c + 1);
    }

    function SubtractCount(){
        setCount(c => c - 1);
    }

    function ChangeColorCount(){
        setColor(c => c === "green" ? "red" : "green");
    }    

    return (<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={SubtractCount}>Subtract</button>
        <button onClick={ChangeColorCount}>Change Color</button>

    </>);

}

export default UseEffect