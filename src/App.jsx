import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Games from './Games.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Students from './Students.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import Button2 from './Button2.jsx';
import MyComponent from './MyComponent.jsx';
import Counter from './Counter.jsx';
import ColorPicker from './ColorPicker.jsx';
import Foods from './Foods.jsx';
import Cars from './Cars.jsx';
import ToDoList from './ToDoList.jsx';
import UseEffect from './UseEffect.jsx';
import DigitalClock from './DigitalClock.jsx';


function App(){
        const fruits = [{id: 1, name: "apple", calories: 95},
                        {id: 2, name: "banana", calories: 105},
                        {id: 3, name: "orange", calories: 45},
                        {id: 4, name: "coconut", calories: 159},
                        {id: 5, name: "pinaple", calories: 37}
              ];

        const vegetables = [{id: 6, name: "potatoes", calories: 95},
                            {id: 7, name: "celery", calories: 105},
                            {id: 8, name: "carrots", calories: 45},
                            {id: 9, name: "corn", calories: 159},
                            {id: 10, name: "broccoli", calories: 37}
              ];
        
        return(
    <>

      <Header/>   
      <Games/>
      <Footer/>
      <Card/>
      <Button/>
      <Button2/>
      <Students name="George" age="27" isStudents={true}/>
      <Students name="John" age="34" isStudents={false}/>
      <Students name="Bill" age="28" isStudents={true}/>
      <UserGreeting isLoggedIn={true} username="Ilias"/> 
      {fruits.length > 0 && <List items={fruits} category="Fruits"/> }
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/> }
      <MyComponent/>
      <Counter/>
      <ColorPicker/>
      <Foods/>
      <Cars/>
      <ToDoList/>
      <UseEffect/>
      <DigitalClock/>
    </>
  );
}

export default App