import React from "react";
import { useState } from "react";
import "./App.css";

// Created a Array of Friends
const initialFriends = [
  // Objects of friends

  {
    id: 1,
    name: "Ashish",
    image: "https://i.pravatar.cc/50",
    balance: -50,
  },

  {
    id: 2,
    name: "Sushant",
    image: "https://i.pravatar.cc/48",
    balance: 50,
  },

  {
    id: 3,
    name: "Shekhar",
    image: "https://i.pravatar.cc/55",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

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

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => cur?.id === friend.id ? null :friend);
    setShowAddFriend(false); // to close the form after selecting a friend
    // setShowAddFriend(!showAddFriend);  
  }


  function handleSplitBill(value) {
    console.log(value);

    setFriends((friends) => 
    friends.map((friend)=>
    friend.id === selectedFriend.id
  ? { ...friend, balance:friend.balance +value}
  : friend)
    )

    setSelectedFriend(null); // to close the form after splitting the bill .
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends}
        selectedFriend={selectedFriend}
        onSelection={handleSelection} />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
    </div>
  );
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} 
        selectedFriend={selectedFriend}
        onSelection={onSelection} />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend}) {
  const isSelected = selectedFriend?.id === friend.id; // to check if the friend is selected  

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}${" "}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance === 0 && <p> You and {friend.name} are even </p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({onAddFriend}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault(); // to prevent the page from reloading

    if (!name || !image) return;

    const id = crypto.randomUUID(); // to generate a random id
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend); // to add the new friend to the list

    setName(" ");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      {/* <div className="form-grid"> */}
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📷Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      {/* </div> */}
    

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({selectedFriend, onSplitBill}) {
const [bill, setBill] = useState("");
const [paidByUser, setPaidByUser] = useState("");
const paidByFriend = bill ? bill - paidByUser : "";
// to calculate the paid by friend
const [whoIsPaying, setWhoIsPaying] = useState("user");



function handleSubmit(e) {
  e.preventDefault(); // to prevent the page from reloading

  if(!bill || !paidByUser) return; // to check if the bill and paid by user is not empty
  onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser );
}

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a Bill with {selectedFriend.name}</h2>

      <label>💰Bill value</label>
      <input 
      type="text" value={bill} 
      onChange={(e)=> setBill(Number(e.target.value))}
      />

      <label>🧑‍🤝‍🧑Your expense</label>
      <input type="text" value={paidByUser}
      onChange={(e)=> setPaidByUser(Number(e.target.value>
        bill ? paidByUser : 
        Number(e.target.value)))}
      />

      <label>👨‍🤝‍👨{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend}
      />

      <label>🤑🤑Who is paying the bill</label>
      <select value={whoIsPaying}
      onChange={(e)=> setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
