import {
  sendUserEditInfo,
  userEdit
} from '../../../../redux/actions/authActions';

function onSave(event, userId, data, dispatch) {
  event.preventDefault();
  dispatch(sendUserEditInfo(userId, data));
  dispatch(userEdit({}));
}

export default onSave;
