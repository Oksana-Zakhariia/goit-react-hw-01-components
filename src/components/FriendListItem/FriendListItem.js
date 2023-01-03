import {PropTypes } from 'prop-types';

export const FriendListItem = ( props) => {
    const { isOnline, avatar, name } = props;
    return <li>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
</li>
}


FriendListItem.propTypes = {
    props:PropTypes.exact ({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}) }