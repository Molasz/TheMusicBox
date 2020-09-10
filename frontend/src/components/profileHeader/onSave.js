import {
  sendEditInfo,
  editName,
  editBio
} from '../../redux/actions/authActions';

function onSave(event, userId, data, dispatch) {
  event.preventDefault();
  dispatch(sendEditInfo(userId, data));
  dispatch(editName());
  dispatch(editBio());
}

export default onSave;
