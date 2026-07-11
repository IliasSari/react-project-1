import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Games from './Games.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Students from './Students.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';

function App(){
        const fruits = [{id: 1, name: "apple", calories: 95},
                  {id: 2, name: "banana", calories: 105},
                  {id: 3, name: "orange", calories: 45},
                  {id: 4, name: "coconut", calories: 159},
                  {id: 5, name: "pinaple", calories: 37}
              ];
  return(
    <>

      <Header/>   
      <Games/>
      <Footer/>
      <Card/>
      <Button/>
      <Students name="George" age="27" isStudents={true}/>
      <Students name="John" age="34" isStudents={false}/>
      <Students name="Bill" age="28" isStudents={true}/>
      <UserGreeting isLoggedIn={true} username="Ilias"/> 
      <List items={fruits} category={fruits}/>
    </>
  );
}

export default App