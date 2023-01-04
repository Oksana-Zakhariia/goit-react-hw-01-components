import { PropTypes } from  'prop-types'
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import friends from '../../data/friends.json'
import { List, ListItem } from './FriendList.styled';
console.log(friends);

export const FriendList = ({friends}) => {
    return <List>        
        {friends.map(({id, isOnline, avatar, name}) => {
            return (<ListItem  key={id}>
                <FriendListItem                    
                isOnline={isOnline}
                avatar={avatar}
                name={name} />
                </ListItem>
                 )                 
                } )}
  </List>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number.isRequired}))
}