
function Button2(){

    const handleCLick = (e) => e.target.textContent = "Ouch!"

    return(<button onClick={handleCLick}>Click me</button>);
}

export default Button2