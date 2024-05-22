import { useState } from "react";

const FormSplitBill = ({ selectedFriend, splitBill }) => {
  const [bill, setBill] = useState("");
  const [userBill, setUserBill] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const friendBill = bill ? bill - userBill : "" ;
  
  const { name } = selectedFriend;
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (bill === "" || userBill === "") {
      alert("Please enter a valid value!");
      return
    }
    const value = whoIsPaying === "user" ? friendBill : -userBill;
    splitBill(value)

  }
 
  return (
    <article className="splitForm">
      <h2>🫰Split a Bill with {name}🫶</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Bill Value:</label>
          <input 
            type="number"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))} 
          />
        </div>
        <div>
          <label>Your expensive: </label>
          <input 
            type="number"
            value={userBill}
            onChange={(e) => setUserBill(
              Number(e.target.value) > bill ? userBill :
              Number(e.target.value)
            )} 
          />
        </div>
        <div>
          <label>{name}'s expensive: </label>
          <input 
            type="number" 
            value={friendBill}
            disabled
          />
        </div>
        <div>
          <label>Who is paying the bill: </label>
          <select
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            <option value="user">You</option>
            <option value="friend">{name}</option>
          </select>
        </div>
        <button
          className="btn btn-split-form"
        >
          Split Bill
        </button>
      </form>
    </article>
  )
}
export default FormSplitBill