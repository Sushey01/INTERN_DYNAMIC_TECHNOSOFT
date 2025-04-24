import React from "react";
import "./App.css";

//Created an array of friends.

const initialFriends = [
  {
    id:1,
    name: "Kushal",
    image: "https://i.pravatar.cc/40",
    recBalance: 5,
    recommendations: [
      { id: "song1", title: "Perfect", artist: "Ed Sheeran" },
      { id: "song2", title: "Gajalu Ti thula", artist: "Narayan Gopal" },
    ],
  },

  {
    id: 2,
    name: "Sandip",
    image: "https://i.pravatar.cc/40",
    recBalance: 10,
    recommendations: [
      { id: "song3", title: "National Anthem", artist: "Kavi Pradeep" },
      { id: "song4", title: "Tum Hi Ho", artist: "Arjit Singh" },
    ],
  },

  {
    id: 3,

    name: "Susan",
    image: "https://i.pravatar.cc/40",
    recBalance: -3,
    recommendations: [
      { id: "song5", title: "Hawa Jastai Malai", artist: "John Chamling" },
      { id: "song6", title: "Pratigya le", artist: "Adrian Dewan" },
    ],
  },

  {
    id: 4,
    name: "Ashish",
    image: "https://i.pravatar.cc/40",
    recBalance: 0,
    recommendations: [
      { id: "song7", title: "Tum Hi Ho", artist: "Arijit Singh" },
      { id: "song8", title: "k garu", artist: "John Chamling" },
    ],
  },
];

export default function App() {
  // const [friends, setFriends] = useState(initialFriends);
  // const [selectedFriend, setSelectedFriend] = useState(null);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList/>
        <FormAddFriend />
      </div>
    </div>
  )
}

function FriendsList() {
  const friends=initialFriends;
  return <ul>
    {friends.map((friend)=>(
      <Friend friend={friend} key={friend.id}/>
    ))}
  </ul>
}


function Friend({friend}) {
  const suggestSong = () => {
    if (friend.recommendations && friend.recommendations.length > 0) {
      const randomIndex = Math.floor(Math.random() * friend.recommendations.length);
      alert(`Suggested song: "${friend.recommendations[randomIndex].title}" by ${friend.recommendations[randomIndex].artist}`);
    } else {
      alert(`${friend.name} has no song recommendations.`);
    }
  };


  
    // return <li>
    //   <img src ={friend.image} alt="friend.name"></img>
    //   <h3>{friend.name}</h3>
      
  
    //   {friend.recBalance < 0 && (
    //     <p className="red">
    //       You owe {friend.name} a recommendation.
    //       Suggesting a {friend.recommendation} song.
    //     </p>
    //   )}
  
    //   {friend.recBalance > 0 && (
    //     <p className="green">
    //       {friend.name} needs to recommend songs to you. 
    //     </p>
    //   )}
  
    //   {friend.recBalance === 0 && (
    //     <p>
    //       You have no recommendations from {friend.name}. So it's settled.
    //     </p>
    //   )}
  
  return (
    <li>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>

      {friend.recBalance < 0 && (
        <p className="red">
          You owe {friend.name} a recommendation.
        </p>
      )}

      {friend.recBalance > 0 && (
        <p className="green">
          {friend.name} needs to recommend songs to you.
        </p>
      )}

      {friend.recBalance === 0 && (
        <p>
          You have no recommendations from {friend.name}. So it's settled.
        </p>
      )}

      <Button onClick={suggestSong}>Suggest Song</Button>
      <Button>Select</Button>
    </li>
  );

}

function Button( {children}) {
  return <button className="button">{children}</button>
}

function FormAddFriend(){
  return <form className="form-add-friend">
    <label>😒😒Friend Name</label>
    <input type='text' />

    <label>📷😁Image URL</label>
    <input type="text" />

    <Button> Add Friend </Button>
  </form>
}



