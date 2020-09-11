import { edit } from '../../../../redux/actions/authActions';

function onEdit(event, user, bio, dispatch) {
  event.preventDefault();
  event.target.style.color = 'ffffff';
  dispatch(edit({ user, bio }));
}

export default onEdit;
