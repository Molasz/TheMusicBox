import { addFollow, removeFollow } from '../../../../redux/actions/authActions';

function onFollow(event, user, bandId, isFollowing, setIsFollowing, dispatch) {
  event.preventDefault();
  if (!(Object.keys(user).length === 0 && user.constructor === Object)) {
    if (!isFollowing) dispatch(addFollow(user._id, bandId));
    else dispatch(removeFollow(user._id, bandId));
    setIsFollowing(!isFollowing);
  } else alert('Login to use this feature');
  return isFollowing ? 'orange' : 'white';
}

export default onFollow;
