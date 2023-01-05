import { PropTypes } from 'prop-types';
import { FriendCard, Status, FriendName } from './FriendListItem.styled';

export const FriendListItem = props => {
  const { isOnline, avatar, name } = props;
  return (
    <FriendCard>
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
