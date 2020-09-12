import { showDisc } from '../../../../../redux/actions/bandActions';

function onShow(event, index, dispatch) {
  event.preventDefault();
  dispatch(showDisc(index));
}

export default onShow;
