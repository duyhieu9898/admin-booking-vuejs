import config from './config';

export default {
  GET_STATISTICAL: `${config.SERVER_ADDRESS}/api/statistical`,
  GET_MESSAGES: `${config.SERVER_ADDRESS}/api/messages`,
  SEND_MESSAGE: `${config.SERVER_ADDRESS}/api/messages/send`,
  //
  GET_ADDRESS_BY_ID: `${config.SERVER_ADDRESS}/api/addresses/:id`,
  CREATE_ADDRESS: `${config.SERVER_ADDRESS}/api/addresses/create`,
  UPDATE_ADDRESS_BY_ID: `${config.SERVER_ADDRESS}/api/addresses/:id`,
  GET_WARDS_BY_DISTRICT_ID: `${config.SERVER_ADDRESS}/api/wards/:id`,
  GET_DISTRICTS_BY_PROVINCE_ID: `${config.SERVER_ADDRESS}/api/districts/:id`,
  GET_PROVINCES: `${config.SERVER_ADDRESS}/api/provinces`,
  //
  GET_IMAGES_BY_ROOM_ID: `${config.SERVER_ADDRESS}/api/images/room/:id`,
  DELETE_IMAGE_BY_ID:  `${config.SERVER_ADDRESS}/api/images/:id`,
  CREATE_IMAGE:  `${config.SERVER_ADDRESS}/api/images`,
  //
  GET_USERS: `${config.SERVER_ADDRESS}/api/users/`,
  SEARCH_USER: `${config.SERVER_ADDRESS}/api/search-users/:meta`,
  GET_USER_BY_ID: `${config.SERVER_ADDRESS}/api/users/:id`,
  GET_CURRENT_USER: `${config.SERVER_ADDRESS}/api/getCurrentUser`,
  CREATE_USER: `${config.SERVER_ADDRESS}/api/users/`,
  UPDATE_USER_BY_ID: `${config.SERVER_ADDRESS}/api/users/:id`,
  DELETE_USER_BY_ID: `${config.SERVER_ADDRESS}/api/users/:id`,
  //
  SEND_NOTIFICATION: `${config.SERVER_ADDRESS}api/send-notification`,
  GET_ADDRESS_BY_ID: `${config.SERVER_ADDRESS}/api/addresses/:id`,
  GET_LIST_BOOKING: `${config.SERVER_ADDRESS}/api/bookings`,
  GET_BOOKING_BY_ID: `${config.SERVER_ADDRESS}/api/bookings/:id`,
  UPDATE_BOOKING_BY_ID: `${config.SERVER_ADDRESS}/api/bookings/:id`,
  DELETE_BOOKING_BY_ID: `${config.SERVER_ADDRESS}/api/bookings/:id`,
  GET_USERS_BOOKING: `${config.SERVER_ADDRESS}/api/users/list-booking`,
  UPDATE_STATUS_BOOKING_BY_ID: `${config.SERVER_ADDRESS}/api/bookings/:id/status-update/`,
  //
  GET_TASK: `${config.SERVER_ADDRESS}api/task`,
  CREATE_TASK: `${config.SERVER_ADDRESS}api/task`,
  UPDATE_TASK_BY_ID: `${config.SERVER_ADDRESS}api/task/:id`,
  DELETE_TASK_BY_ID: `${config.SERVER_ADDRESS}api/task/:id`,
  //
  GET_CATEGORIES:  `${config.SERVER_ADDRESS}/api/categories`,
  CREATE_CATEGORY: `${config.SERVER_ADDRESS}/api/categories`,
  UPDATE_CATEGORY_BY_ID: `${config.SERVER_ADDRESS}/api/categories/:id`,
  DELETE_CATEGORY_BY_ID: `${config.SERVER_ADDRESS}/api/categories/:id`,
  //
  GET_CONVENIENCES:  `${config.SERVER_ADDRESS}/api/conveniences`,
  CREATE_CONVENIENCE: `${config.SERVER_ADDRESS}/api/conveniences`,
  UPDATE_CONVENIENCE_BY_ID: `${config.SERVER_ADDRESS}/api/conveniences/:id`,
  DELETE_CONVENIENCE_BY_ID: `${config.SERVER_ADDRESS}/api/conveniences/:id`,
  //
  GET_ROOMS_BY_PAGE:  `${config.SERVER_ADDRESS}/api/rooms?page=:page`,
  GET_DATA_EDIT_ROOM_BY_ID: `${config.SERVER_ADDRESS}/api/rooms/:id/edit`,
  GET_DATA_CREATE_ROOM: `${config.SERVER_ADDRESS}/api/rooms/create`,
  CREATE_ROOM: `${config.SERVER_ADDRESS}/api/rooms`,
  UPDATE_ROOM_BY_ID: `${config.SERVER_ADDRESS}/api/rooms/:id`,
  DELETE_ROOM_BY_ID: `${config.SERVER_ADDRESS}/api/rooms/:id`,
  SET_ROOM_ACTIVE_BY_ID: `${config.SERVER_ADDRESS}/api/rooms/:id/active`,
  UPDATE_PEOPLE_ROOM: `${config.SERVER_ADDRESS}/api/rooms/updatePeople`,
};
