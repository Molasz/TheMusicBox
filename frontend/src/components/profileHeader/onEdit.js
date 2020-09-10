import { editBio, editName } from '../../redux/actions/authActions';

function onEdit(event, name, bio, dispatch) {
  event.preventDefault();
  event.target.style.color = 'ffffff';
  dispatch(editName(name));
  dispatch(editBio(bio));
}

export default onEdit;
