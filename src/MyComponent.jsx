import {useState} from 'react';


function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName ("George");
    }

    const incementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
    return(<div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incementAge}>Incement Age</button>

                <p>isEmployed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployedStatus}>Incement Age</button>
    </div>);
    
}

export default MyComponent