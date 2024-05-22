import { useState } from "react"

const AddForm = ({ addFriend }) => {
    const [friend, setFriend] = useState({ 
        name: "",
        balance: ""
    })

   const handleChange = (e) => {
        setFriend({ ...friend, [e.target.name]:e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (friend.name === "" || friend.balance === "") {
            alert("Please a enter valid value!");
            return
        }
        addFriend(friend);
    }

  return (
    <section className="addForm">
        <form onSubmit={handleSubmit}>
            <label>Friend Name: </label>
            <input 
                type="text"
                name="name"
                value={friend.name} 
                onChange={handleChange}
       
            />
            <label>Balance: </label>
            <input 
                type="number"
                min="-1000"
                max="1000"
                name="balance"
                value={friend.balance}
                onChange={handleChange}

            />
            <button
                className="btn btn-split-form"
            >
                add Friend
            </button>
        </form>
    </section>
  )
}
export default AddForm