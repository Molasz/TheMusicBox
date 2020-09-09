function onShow(event, index) {
  event.preventDefault();
  dispatch(showDisc(index));
}

export default onShow;
