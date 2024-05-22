import { SingleItem } from "./index";

const Items = ({ friends, selectFriend, selectedFriend }) => {
  return (
    <article className="list">
      {
        friends.map(item => {
          return (
            <SingleItem 
              key={item.id} 
              selectFriend={selectFriend} 
              selectedFriend={selectedFriend}
              {...item} 
            />
          )
        })
      }
    </article>
  )
}
export default Items