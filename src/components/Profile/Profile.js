import PropTypes from 'prop-types'
import user from '../../data/user.json';
import { ProfileConatiner, Stats, UserInfo, UserPhoto, StatsItem, UserName, StatsLabel, StatsQuantity } from './Profile.styled';
console.log(user);
export const Profile = (user) => {
  const {avatar, username, tag,location, stats:{followers, views, likes} } = user;
  return <ProfileConatiner >
  <UserInfo>
    <UserPhoto
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <p >{tag}</p>
    <p >{location}</p>
  </UserInfo>

  <Stats>
    <StatsItem>
      <StatsLabel>Followers </StatsLabel>
      <StatsQuantity>{followers}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Views </StatsLabel>
      <StatsQuantity>{views}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Likes </StatsLabel>
      <StatsQuantity>{likes}</StatsQuantity>
    </StatsItem>
  </Stats>
</ProfileConatiner> 
 }

Profile.propTypes = {user: PropTypes.shape({avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,})})  
    
}