import {
  sendUserEditInfo,
  userEdit
} from '../../../../redux/actions/authActions';

import store from '../../../../redux/store';

function onSave(event, userId, data) {
  event.preventDefault();
  store.dispatch(sendUserEditInfo(userId, data));
  store.dispatch(userEdit({}));
}

export default onSave;
