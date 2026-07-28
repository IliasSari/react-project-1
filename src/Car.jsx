import { useState } from "react";


function Car(){
    const [car,setCar] = useState({ year: 2026, 
                                    make: "Skoda", 
                                    model: "Octavia"});
    
    function handleYearChange(event){
        setCar({year: event.target.value});
    }
    function handleMakeChange(event){

    }
    function handleModelChange(event){

    }

    return(<div>
        <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>
    </div>);
}

export default Car