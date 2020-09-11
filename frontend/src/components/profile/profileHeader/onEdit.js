import { edit } from '../../../redux/actions/authActions';

function onEdit(event, name, bio, dispatch) {
  event.preventDefault();
  event.target.style.color = 'ffffff';
  dispatch(edit({ name, bio }));
}

export default onEdit;
