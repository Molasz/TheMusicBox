import { sendEditInfo, edit } from '../../../../redux/actions/authActions';

function onSave(event, userId, data, dispatch) {
  event.preventDefault();
  dispatch(sendEditInfo(userId, data));
  dispatch(edit({}));
}

export default onSave;
