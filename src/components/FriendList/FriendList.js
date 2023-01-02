import { PropTypes } from  'prop-types'
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import friends from 'components/friends.json'
export const FriendList = ({friends}) => {
    return <ul>        
        {friends.map(friend => {
            return <li key={friend.id}>
                <FriendListItem
                
                isOnline={friend.isOnline}
                avatar={friend.avatar}
                name={friend.name} />  
                </li> 
                } )}
  </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number.isRequired}))
}