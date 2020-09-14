import {
  sendBandEditInfo,
  bandEdit
} from '../../../../redux/actions/bandActions';

import store from '../../../../redux/store';

function onSave(event, bandId, data) {
  event.preventDefault();
  store.dispatch(sendBandEditInfo(bandId, data));
  store.dispatch(bandEdit({}));
}

export default onSave;
