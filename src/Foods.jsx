import { useState } from "react";

function Foods(){
    
    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFood(){

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value= "";

        setFoods(foods => [... foods, newFood]);
    }

    function handleRemoveFood(index){

        setFoods(foods.filter((element, i) => i !== index))
    }

    return (<div>
                <h2>List of Food</h2>
                <ul>
                    {foods.map((foods, index) => 
                    <li key={index} onClick={()=> handleRemoveFood(index)}>{foods}</li>)}
                </ul>
                <input type="text" id="foodInput" placeholder="Ender food name"/>
                <button onClick={handleAddFood}>Add Food</button>
            </div>);
}

export default Foods