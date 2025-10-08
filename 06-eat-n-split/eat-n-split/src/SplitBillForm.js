import { useState } from "react";
import Button from "./Button";

function SplitBillForm({ friend, onSplitNewBill }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [paidBy, setPaidBy] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !expense) return;

    const newBill = {
      total: bill,
      paidBy: paidBy,
      expense: expense,
      friendId: friend.id,
    };

    onSplitNewBill(newBill);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>
      <label>Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
      <label>Your expense</label>
      <input
        type="number"
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > bill ? expense : Number(e.target.value)
          )
        }
      />
      <label>{friend.name}'s expense</label>
      <input type="text" disabled value={bill - expense} />
      <label>Who is paying the bill?</label>
      <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default SplitBillForm;
