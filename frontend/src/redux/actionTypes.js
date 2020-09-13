export default {
  ERROR: 'ERROR',

  GET_BAND: 'GET_BAND', // Return band object
  SEARCH_BAND: 'SEARCH_BAND', // Return array of matched bands
  SHOW_DISC: 'SHOW_DISC', // Return number of disc you click
  FOLLOW_BAND: 'FOLLOW_BAND', // Return number of user follow a band
  NEW_BAND: 'NEW_BAND', // Create standard band document
  BAND_EDIT: 'BAND_EDIT',
  BAND_EDIT_NAME: 'BAND_EDIT_NAME', // Return edited name by user
  BAND_EDIT_BIO: 'BAND_EDIT_BIO', // Return edited bio by user
  BAND_EDIT_CITY: 'BAND_EDIT_CITY', // Return edited city by user
  BAND_EDIT_COUNTRY: 'BAND_EDIT_COUNTRY', // Return edited country by user
  BAND_EDIT_TWITTER: 'BAND_EDIT_TWITTER',
  BAND_EDIT_FACEBOOK: 'BAND_EDIT_FACEBOOK',
  BAND_EDIT_INSTAGRAM: 'BAND_EDIT_TINSTAGRAM',
  BAND_EDIT_PUBLIC: 'BAND_EDIT_PUBLIC',
  SEND_BAND_EDIT_INFO: 'SEND_BAND_EDIT_INFO', // Return user with info updated

  GET_USER: 'GET_USER', // Return user object
  SAVE_USER: 'SAVE_USER', // Return userIdentifier
  REMOVE_USER: 'REMOVE_USER', // Remove userIdentifier
  ADD_FOLLOW: 'ADD_FOLLOW', // Add follow to user document
  REMOVE_FOLLOW: 'REMOVE_FOLLOW', // Remove follow to user document
  USER_EDIT_NAME: 'USER_EDIT_NAME', // Return edited name by user
  USER_EDIT_BIO: 'USER_EDIT_BIO', // Return edited bio by user
  SEND_USER_EDIT_INFO: 'SEND_USER_EDIT_INFO', // Return user with info updated
  USER_EDIT: 'USER_EDIT'
};
