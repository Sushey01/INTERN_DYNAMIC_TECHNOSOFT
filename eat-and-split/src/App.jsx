import React from 'react'

// Created a Array of Friends
const initialFriends = [

  // Objects of friends

  {
    id:1,
    name:"Ashish",
    image:".src/img/poster1.jpg",
    balance: 0
  },

  {
    id:2,
    name:"Sushant",
    image:".src/img/poster3.jpg",
    balance:0
  },

  {
    id:3,
    name:"Shekhar",
    image:"./src/img/shekhar.jpg",
    balance:100
  }
]

export default function App() {
  return (
    <div className="split-app">
      <div className="sidebar">
      <FriendsList />
      </div>
    </div>

  );
}

function FriendsList(){
  const friends = initialFriends;

  return (
  <ul>
    {friends.map((friend)=>(
      <Bfriend friend={friend} key={friend.id} />
    ))}
  </ul>
  );
}

function Bfriend({friend}) {
  return <li>{friend.name}</li>;
}