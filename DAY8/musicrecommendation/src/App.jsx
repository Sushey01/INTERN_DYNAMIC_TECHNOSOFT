import React from "react";
import { useState } from "react";
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
    image: "https://i.pravatar.cc/41",
    recBalance: 10,
    recommendations: [
      { id: "song3", title: "National Anthem", artist: "Kavi Pradeep" },
      { id: "song4", title: "Tum Hi Ho", artist: "Arjit Singh" },
    ],
  },

  {
    id: 3,

    name: "Susan",
    image: "https://i.pravatar.cc/42",
    recBalance: -3,
    recommendations: [
      { id: "song5", title: "Hawa Jastai Malai", artist: "John Chamling" },
      { id: "song6", title: "Pratigya le", artist: "Adrian Dewan" },
    ],
  },

  {
    id: 4,
    name: "Ashish",
    image: "https://i.pravatar.cc/43",
    recBalance: 0,
    recommendations: [
      { id: "song7", title: "Tum Hi Ho", artist: "Arijit Singh" },
      { id: "song8", title: "k garu", artist: "John Chamling" },
    ],
  },
];




function Button( {children, onClick}) {
  return <button className="button" onClick={onClick}>{children}</button>
}



export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [formAddSong, setFormAddSong] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

 
function handleShowAddFriend( ) {
  setShowAddFriend((show)=> !show);
  // setShowAddFriend(false);
}


function handleAddFriend(friend) {
  setFriends((friends) => [...friends, friend]);
  setShowAddFriend(false);
}

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList  friends={friends}/>
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add Friend"}</Button>
        <FormAddSong />
      </div>
    </div>
  )
}





function FriendsList() { //passing the Prop friends to freindslist 
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



function FormAddFriend(onAddFriend){
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/43")

function handleSubmit(e){
  e.preventDefault(); // Prevent the default form submission behavior

  if (!name || !image) return; // Check if name and image are provided

  // creating a new friend object
  
    const id = Crypto.randomUUID();
    const newFriend ={
    id,
    name,
    image: `${image}?=${id}`,
    recBalance: 0,
    recommendations: [],
  }

  onAddFriend(newFriend);
  // Adding the new friend to the list of friends

  setName(""); // Clear the name input
  setImage("https://i.pravatar.cc/43");
}


  return <form className="form-add-friend" onChange={handleSubmit}>
    <label>😒😒Friend Name</label>
    <input type='text' 
    value={name}
    onChange={(e)=> setName(e.target.value)}
    />

    <label>📷😁Image URL</label>
    <input type="text" 
    value={image}
    onChange={(e)=> setImage(e.target.value)}
    />
    

    <Button> Add </Button>
  </form>
}



function FormAddSong() {
  return (
  <form className="form-add-song">
    <h2>RECOMMEND A SONG !</h2>
    <label>🎵Song Name</label>
    <input type="text" />

    <label>🎤Artist Name</label>
    <input type="text" />


    <label>💿Who is recommending the song</label>
    <select>
      <option value="user1">Kushal</option>
      <option value="user2"> Sandip </option>
      <option value="user3">Susan</option>
      <option value="user4">Ashish</option>
    </select>

    <Button>Check Recommendations </Button>
  </form>
  )
}