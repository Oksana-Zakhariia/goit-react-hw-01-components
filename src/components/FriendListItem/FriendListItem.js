import {PropTypes } from 'prop-types';

export const FriendListItem = ( props) => {
    const { isOnline, avatar, name } = props;
    return <>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
</>
}


FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}