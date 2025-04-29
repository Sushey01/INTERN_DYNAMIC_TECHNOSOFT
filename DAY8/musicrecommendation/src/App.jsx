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
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddSong, setShowAddSong] = useState(false);

 
function handleShowAddFriend( ) {
  setShowAddFriend((show)=> !show);
  // setShowAddFriend(false);
}


function handleAddFriend(friend) {
  setFriends((friends) => [...friends, friend]);
  setShowAddFriend(false);
}



function handleSelection(friend) {
  setSelectedFriend((cur)=> (cur?.id === friend.id ? null :friend));
}

function onAddSong(newSong) {
  setFriends((prevFriends) =>
  prevFriends.map((friend)=>
  friend.id === selectedFriend.id
? {...friend, recommendations: [...friend.recommendations, newSong]}
: friend))}


  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList  friends={friends}
        selectedFriend={selectedFriend}
        onSelection={handleSelection}
        onAddSong={onAddSong}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
        {selectedFriend && <FormAddSong selectedFriend={selectedFriend} onAddSong={onAddSong} friends={friends} />}

       
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add Friend"}</Button>
        


      </div>
    </div>
  )
}





function FriendsList({friends, onSelection, selectedFriend}) { //passing the Prop friends to freindslist 
  
  return <ul>
    {friends.map((friend)=>(
      <Friend friend={friend} key={friend.id} 
      selectedFriend={selectedFriend}
      onSelection={onSelection} />
    ))}
  </ul>
}


function Friend({friend , onSelection, selectedFriend}) {
  const isSelected = selectedFriend ?.id === friend.id;

  const recommendSong = () => {
    
    if (friend.recommendations && friend.recommendations.length > 0) {
      const randomIndex = Math.floor(Math.random() * friend.recommendations.length);
      alert(`Suggested Song by ${suggestedBy.friend}: "${friend.recommendations[randomIndex].title}" by ${friend.recommendations[randomIndex].artist }`);
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

      <Button onClick={recommendSong}>Recommendations</Button>
      {/* <Button onClick={suggestedBy}>Suggestions</Button> */}
      

      <Button onClick={()=> onSelection(friend)}> {isSelected ? "Close" : "Select"} </Button>
    </li>
  );

}


function FormAddFriend({friend, onAddFriend}){
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/43")

function handleSubmit(e){
  e.preventDefault(); // Prevent the default form submission behavior

  if (!name || !image) return; // Check if name and image are provided

  // creating a new friend object
  
    const id = crypto.randomUUID();
    const newFriend ={
    id,
    name,
    image: `${image}?u=${id}`,
    recBalance: 0,
    recommendations: [],
  }


  

  onAddFriend(newFriend);
  // Adding the new friend to the list of friends

  setName(""); // Clear the name input
  setImage("https://i.pravatar.cc/43");
}




  return <form className="form-add-friend" onSubmit={handleSubmit}>
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


function FormAddSong({ selectedFriend, onAddSong, friends }) {
  const [songTitle, setSongTitle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [suggestedBy, setSuggestedBy] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (!songTitle || !artistName || !suggestedBy) return;

    const newSong = {
      id: crypto.randomUUID(),
      title: songTitle,
      artist: artistName,
      suggestedBy: suggestedBy.name,
    };

    onAddSong(newSong);

    setSongTitle("");
    setArtistName("");
    setSuggestedBy("");
  }

  return (
    <form className="form-add-song" onSubmit={handleClick}>
      <h2>SUGGEST A SONG TO {selectedFriend.name}!</h2>

      <label>🎵 Song Name</label>
      <input
        type="text"
        value={songTitle}
        onChange={(e) => setSongTitle(e.target.value)}
      />

      <label>🎤 Artist Name</label>
      <input
        type="text"
        value={artistName}
        onChange={(e) => setArtistName(e.target.value)}
      />

      <label>💿 Who is suggesting the song</label>
      <select
        value={suggestedBy}
        onChange={(e) => setSuggestedBy(e.target.value)}
      >
        <option value="" disabled>Select a friend</option>

        {friends
          .filter((friend) => friend.id !== selectedFriend.id)
          .map((friend) => (
            <option key={friend.id} value={friend.name}>
              {friend.name}
            </option>
          ))}
      </select>

      <Button >SUBMIT</Button>
    </form>
  );
}
