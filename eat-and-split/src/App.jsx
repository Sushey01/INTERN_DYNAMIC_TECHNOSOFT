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
    // image:"./src/img/poster3.jpg",
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
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
    // we can use this also 
    // setShowAddFriend((show)=>!show);
  }

  return (
    <div className="split-app">
      <div className="sidebar">
      <FriendsList />
      {showAddFriend && <FormAddFriend />}
      <Button onClick={handleShowAddFriend}> 
        {showAddFriend ? 'Close' : 'Add friend'} 
      </Button>
      </div>
      <FormSplitBill />  
    </div>

    

  );
}

function FriendsList(){
  const friends = initialFriends;

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




function FormAddFriend() {
  return <form className="form-add-friend">
    <label>🧑‍🤝‍🧑Friend name</label>
    <input type='text' />
    

    <label>📷Image URL</label>
    <input type='text' />

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