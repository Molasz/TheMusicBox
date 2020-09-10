function changeTargetTagtoInput(event, isEdit) {
  if (isEdit) {
    event.target.replace('strong', 'p');
  }
}
export default changeTargetTagtoInput;
