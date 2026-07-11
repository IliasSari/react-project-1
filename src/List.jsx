
function List(props){
    
    const itemList = props.items;
    // fruits.sort((a,b) => a.name.localeCompare(b.name));
    const listItems = itemList.map(fruit => <li key={fruit.id}>
                                        {fruit.name}: &nbsp;
                                        <b>{fruit.calories}</b></li>);

    return(<ol>{listItems}</ol>);
}   

export default List