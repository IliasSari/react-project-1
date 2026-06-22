import profilePic from './assets/games.jpg'

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>Ilias</h2>
            <p>I want to learn React</p>
        </div>
    );
}

export default Card
