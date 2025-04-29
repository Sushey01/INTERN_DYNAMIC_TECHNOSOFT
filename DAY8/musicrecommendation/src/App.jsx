import React, { useState } from "react";
import "./App.css";

const initialFriends = [
  {
    id: 1,
    name: "Kushal",
    image: "https://i.pravatar.cc/40",
    recBalance: 5,
    receivedRecommendations: [
      { id: "song1", title: "Perfect", artist: "Ed Sheeran", suggestedBy: "Sandip" },
    ],
  },
  {
    id: 2,
    name: "Sandip",
    image: "https://i.pravatar.cc/41",
    recBalance: 10,
    receivedRecommendations: [],
  },
  {
    id: 3,
    name: "Susan",
    image: "https://i.pravatar.cc/42",
    recBalance: -3,
    receivedRecommendations: [],
  },
  {
    id: 4,
    name: "Ashish",
    image: "https://i.pravatar.cc/43",
    recBalance: 0,
    receivedRecommendations: [],
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
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
  }

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriend(false);
  }

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddSong(newSong) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              receivedRecommendations: [
                ...friend.receivedRecommendations,
                newSong,
              ],
            }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        {selectedFriend && (
          <FormAddSong
            selectedFriend={selectedFriend}
            onAddSong={handleAddSong}
            friends={friends}
          />
        )}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
    </div>
  );
}

function FriendsList({ friends, selectedFriend, onSelection }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, selectedFriend, onSelection }) {
  const isSelected = selectedFriend?.id === friend.id;

  const recommendSong = () => {
    const recs = friend.receivedRecommendations;
    if (recs && recs.length > 0) {
      const { title, artist, suggestedBy } =
        recs[Math.floor(Math.random() * recs.length)];
      alert(`Suggested song by ${suggestedBy} to ${friend.name}: "${title}" by ${artist}`);
    } else {
      alert(`${friend.name} has no song recommendations.`);
    }
  };

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      <p className={friend.recBalance < 0 ? "red" : friend.recBalance > 0 ? "green" : ""}>
        {friend.recBalance < 0
          ? `You owe ${friend.name} a recommendation.`
          : friend.recBalance > 0
          ? `${friend.name} needs to recommend songs to you.`
          : `You and ${friend.name} are all settled.`}
      </p>

      <Button onClick={recommendSong}>Recommendations</Button>
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/43");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      recBalance: 0,
      receivedRecommendations: [],
    };

    onAddFriend(newFriend); // Add the new friend to the list

    setName("");
    setImage("https://i.pravatar.cc/43");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>😒😒Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📷😁Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

function FormAddSong({ selectedFriend, onAddSong, friends }) {
  const [songTitle, setSongTitle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [suggestedBy, setSuggestedBy] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!songTitle || !artistName || !suggestedBy) return;

    const newSong = {
      id: crypto.randomUUID(),
      title: songTitle,
      artist: artistName,
      suggestedBy,
    };

    onAddSong(newSong);
    setSongTitle("");
    setArtistName("");
    setSuggestedBy("");
  }

  return (
    <form className="form-add-song" onSubmit={handleSubmit}>
      <h2>Suggest a song to {selectedFriend.name}!</h2>

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
        <option value="" disabled>
          Select a friend
        </option>
        {friends
          .filter((friend) => friend.id !== selectedFriend.id)
          .map((friend) => (
            <option key={friend.id} value={friend.name}>
              {friend.name}
            </option>
          ))}
      </select>

      <Button>Submit</Button>
    </form>
  );
}
