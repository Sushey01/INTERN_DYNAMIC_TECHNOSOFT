import React from 'react'
import { useState } from 'react';

// Created a Array of Friends
const initialFriends = [

  // Objects of friends

  {
    id:1,
    name:"Ashish",
    // image:"./src/img/poster1.jpg",
    balance: -50
  },

  {
    id:2,
    name:"Sushant",
    image:"https://i.pravatar.cc/48",
    balance:50
  },

  {
    id:3,
    name:"Shekhar",
    // image:"./src/img/poster6.jpg",
    balance:0
  }
]

function Button({children, onClick}){
  return <button className="button" onClick={onClick}>{children}</button>
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
    // we can use this also 
    // setShowAddFriend((show)=>!show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false); // to close the form after adding a friend
    // setShowAddFriend(!showAddFriend);
  }

  return (
    <div className="split-app">
      <div className="sidebar">
      <FriendsList friends={friends}/>
      {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
      <Button onClick={handleShowAddFriend}> 
        {showAddFriend ? 'Close' : 'Add friend'} 
      </Button>
      </div>
      <FormSplitBill />  
    </div>

    

  );
}

function FriendsList({friends}){
  

  return (
    <ul>
      {friends.map((friend)=>(
        <Friend friend={friend} key={friend.id}/>
      ))}
    </ul>
  );
}

function Friend({friend}) {
  return (
  <li>
    <img src={friend.image} alt={friend.name} />
    <h3>{friend.name}</h3>

    {friend.balance < 0 && (
      <p className="red">
      You owe {friend.name} {Math.abs(friend.balance)}$ </p>
    )}


    {friend.balance > 0 && (
      <p className="green">
      {friend.name} owes you {Math.abs(friend.balance)}$ 
      </p>
    )}

    {friend.balance === 0 && <p> You and {friend.name} are even </p>}

      <button className="button">Select</button>
  </li>
  );
}




function FormAddFriend(onAddFriend) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault(); // to prevent the page from reloading

    if (!name || !image) return;

    const id =crypto.randomUUID(); // to generate a random id
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance:0,
      id,
    };
    

    onAddFriend(newFriend); // to add the new friend to the list

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return <form className="form-add-friend" onSubmit={handleSubmit} >
    <label>🧑‍🤝‍🧑Friend name</label>
    <input type='text' value={name} 
    onChange={e=>setName(e.target.value)} />
    

    <label>📷Image URL</label>
    <input type='text' value={image}
    onChange={e=>setImage(e.target.value)} />

    <Button>Add</Button>
  </form>
}


function FormSplitBill() {
  return <form className="form-split-bill">
    <h2>Split a Bill with X</h2>

    <label>💰Bill value</label>
    <input type="text" />

    <label>🧑‍🤝‍🧑Your expense</label>
    <input type="text" />

    <label>👨‍🤝‍👨X's expense</label>
    <input type="text" />

    <label>🤑🤑Who is paying the bill</label>
    <select>
      <option value="1">You</option>
      <option value="2">friend</option>
    </select>

    <Button>Split bill</Button>
  </form>
}