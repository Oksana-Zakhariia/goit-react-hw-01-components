import {PropTypes } from 'prop-types';

export const FriendListItem = ( props) => {
    const { isOnline, avatar, name } = props;
    return <div>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
</div>
}


FriendListItem.propTypes = {
    props: PropTypes.arrayOf
        (PropTypes.exact({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,})    
) }