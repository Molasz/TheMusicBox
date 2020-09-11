import { addFollow, removeFollow } from '../../../../redux/actions/authActions';

function onFollow(event, userId, bandId, dispatch) {
  event.preventDefault();
  /* if (user) {
    if (!isFollowing) dispatch(addFollow(userId, bandId));
    else dispatch(removeFollow(userId, bandId));
    setIsFollowing(!isFollowing);
  } else alert('Login to use this feature');
  return isFollowing ? 'orange' : 'white'; */
}

export default onFollow;
