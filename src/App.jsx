import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Games from './Games.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Students from './Students.jsx';
import UserGreeting from './UserGreeting.jsx';

function App(){
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
    </>
  );
}

export default App