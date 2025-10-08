import { useState } from "react";
import AddFriendForm from "./AddFriendForm";
import Button from "./Button";
import FriendList from "./FriendList";
import SplitBillForm from "./SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleCreateNewFriend(friend) {
    setFriends([...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelectFriend(friend) {
    if (friend === selectedFriend) setSelectedFriend(null);
    else setSelectedFriend(friend);

    setShowAddFriend(false);
  }

  function handleSplitNewBill(bill) {
    let newFriend;

    if (bill.paidBy === "friend")
      newFriend = {
        ...selectedFriend,
        balance: selectedFriend.balance - bill.expense,
      };
    else
      newFriend = {
        ...selectedFriend,
        balance: selectedFriend.balance + bill.total - bill.expense,
      };

    setFriends((friends) =>
      friends.map((friend) => (friend === selectedFriend ? newFriend : friend))
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          firends={friends}
          selectedFriend={selectedFriend}
          onSelectFriend={handleSelectFriend}
        />
        {showAddFriend && (
          <AddFriendForm onCreateNewFriend={handleCreateNewFriend} />
        )}
        <Button onClick={() => setShowAddFriend(!showAddFriend)}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBillForm
          key={selectedFriend.id}
          friend={selectedFriend}
          onSplitNewBill={handleSplitNewBill}
        />
      )}
    </div>
  );
}
