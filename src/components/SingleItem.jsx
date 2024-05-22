const SingleItem = ({ id, name, image, balance, selectFriend, selectedFriend }) => {
  const isSelected = selectedFriend?.id === id;
  // console.log(isSelected)

  return (
    <div className="item">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="name">
        <h4>{name}</h4>
        {
          Number(balance) === 0 ?
          <p>You and {name} are even</p> 
          :
          Number(balance) > 0 ?
          <p>{name} Owes you: ${Math.abs(balance)}</p> 
          :
          <p>You Owe {name}: ${Math.abs(balance)}</p>
        }
      </div>
      <button
        className="btn"
        type="button"
        onClick={() => selectFriend(id)}
      >
        {isSelected ? "Selected" : "Select" }
      </button>
    </div>
  )
}
export default SingleItem