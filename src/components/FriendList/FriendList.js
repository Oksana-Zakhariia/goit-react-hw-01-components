import { PropTypes } from  'prop-types'
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import friends from 'components/friends.json'
console.log( friends);

export const FriendList = ({friends}) => {
    return <ul>        
        {friends.map(({id, isOnline, avatar, name}) => {
            return (
                <FriendListItem 
                key={id}    
                isOnline={isOnline}
                avatar={avatar}
                name={name} /> )                 
                } )}
  </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number.isRequired}))
}