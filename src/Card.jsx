import profilePic from './assets/games.jpg'

function Card(){
    return(
        <div className="card">
            <img className = "card-image" src={profilePic} alt="profile picture"></img>
            <h2 className = "card-title">Ilias</h2>
            <p className = "card-text">I want to learn React</p>
        </div>
    );
}

export default Card
