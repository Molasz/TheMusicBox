import { addFollow, removeFollow } from '../../redux/actions/authActions';

function onFollow(event) {
  event.preventDefault();
  if (user) {
    if (!isFollowing) dispatch(addFollow(user._id, band._id));
    else dispatch(removeFollow(user._id, band._id));
    setIsFollowing(!isFollowing);
  } else alert('Login to use this feature');
  return isFollowing ? 'orange' : 'white';
}

export default onFollow;
