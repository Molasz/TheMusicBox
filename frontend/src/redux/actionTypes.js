export default {
  ERROR: 'ERROR',

  GET_BAND: 'GET_BAND', // Return band object
  SEARCH_BAND: 'SEARCH_BAND', // Return array of matched bands
  SHOW_DISC: 'SHOW_DISC', // Return number of disc you click
  FOLLOW_BAND: 'FOLLOW_BAND', // Return number of user follow a band
  NEW_BAND: 'NEW_BAND', // Create standard band document

  GET_USER: 'GET_USER', // Return user object
  SAVE_USER: 'SAVE_USER', // Return userIdentifier
  REMOVE_USER: 'REMOVE_USER', // Remove userIdentifier
  ADD_FOLLOW: 'ADD_FOLLOW', // Add follow to user document
  REMOVE_FOLLOW: 'REMOVE_FOLLOW', // Remove follow to user document
  EDIT_NAME: 'EDIT_NAME', // Return edited name by user
  EDIT_BIO: 'EDIT_BIO', // Return edited bio by user
  SEND_EDIT_INFO: 'SEND_EDIT_INFO', // Return user with info updated

  EDIT: 'EDIT'
};
