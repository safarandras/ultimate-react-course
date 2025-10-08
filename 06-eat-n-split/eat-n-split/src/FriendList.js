import Friend from "./Friend";

function FriendList({ firends, selectedFriend, onSelectFriend }) {
  return (
    <ul>
      {firends.map((friend) => (
        <Friend
          friend={friend}
          selectedFriend={selectedFriend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
        />
      ))}
    </ul>
  );
}

export default FriendList;
