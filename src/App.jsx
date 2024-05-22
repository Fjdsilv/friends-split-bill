import { useState } from "react";
import data from "./assets/data/Data"
import { nanoid } from "nanoid";
import {
  Header,
  Items,
  AddForm,
  FormSplitBill,
} from "./components/index";

const url = "https://i.pravatar.cc/48"

const App = () => {
  const [friends, setFriends] = useState(data);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const addFriend = (friend) => {
    const id = nanoid();
    const newFriend = {
      id: id,
      name: friend.name,
      image: `${url}?=${id}`,
      balance: Number(friend.balance)
    }
    setFriends([ ...friends, newFriend ]);
    setShowAddForm(!showAddForm);
    setSelectedFriend(null);
  } 

  console.log(friends)

  const selectFriend = (id) => {
    if (selectedFriend?.id === id) {
      setSelectedFriend(null);
      return
    }
    const item = friends.find(friend => friend.id === id);
    setSelectedFriend(item);
  }
  
  const splitBill = (value) => {
    const newFriends = friends.map(friend => {
      return (
        friend.id === selectedFriend.id ? 
        { ...friend, balance: friend.balance + value } : friend
      )
    })
    setFriends(newFriends);
    setSelectedFriend(null);
  }

  return (
    <>
      <Header/>
      <main>
        <div className="container">
          <section className="main">
          <Items 
              friends={friends}
              selectFriend={selectFriend}
              selectedFriend={selectedFriend}
          />
          {selectedFriend && 
          ( <FormSplitBill 
              selectedFriend={selectedFriend}
              splitBill={splitBill}
            />
          )
          }
          </section>
          {showAddForm && 
          ( <AddForm 
            addFriend={addFriend}
            /> 
          )
          }
          <div style={{textAlign: "center", marginTop: "10rem"}}>
            <button
              className="btn btn-add-friend"
              onClick={() => setShowAddForm(!showAddForm)}
              >
              {showAddForm ? "Close" : "Add Friend"}
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
export default App