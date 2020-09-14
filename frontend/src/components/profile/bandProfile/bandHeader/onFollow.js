import { addFollow, removeFollow } from '../../../../redux/actions/authActions';
import { toast } from 'react-toastify';

const followAlert = () =>
  toast.error('You need to login to follow bands', {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });

function onFollow(event, user, bandId, isFollowing, setIsFollowing, dispatch) {
  event.preventDefault();
  if (!(Object.keys(user).length === 0 && user.constructor === Object)) {
    if (!isFollowing) dispatch(addFollow(user._id, bandId));
    else dispatch(removeFollow(user._id, bandId));
    setIsFollowing(!isFollowing);
  } else followAlert();
  return isFollowing ? 'orange' : 'white';
}

export default onFollow;
