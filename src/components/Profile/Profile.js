import PropTypes from 'prop-types'
import user from 'components/user.json';
import { ProfileConatiner, Stats, UserInfo, UserPhoto, StatsItem } from './Profile.styled';
console.log(user);
export const Profile = (user) => {
  const {avatar, username, tag,location, stats:{followers, views, likes} } = user;
  return <ProfileConatiner >
  <UserInfo>
    <UserPhoto
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{username}</p>
      <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </UserInfo>

  <Stats>
    <StatsItem>
      <span className="label">Followers </span>
        <span className="quantity">{followers}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Views </span>
        <span className="quantity">{views}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Likes </span>
        <span className="quantity">{likes}</span>
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