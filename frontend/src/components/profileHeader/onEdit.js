import { editProfile } from '../../redux/actions/authActions';

function onEdit(event, dispatch) {
  event.preventDefault();
  event.target.style.color = 'ffffff';
  dispatch(editProfile(true));
}

export default onEdit;
