import {
  LOGIN,
  LOGOUT,
  SET_AREA_FILTER,
  SET_PROPERTIES,
  SET_PREMISY_FILTER,
  SET_CHOSEN_PROPERTY
} from "../actionTypes";

export function login(username, token) {
  return {
    type: LOGIN,
    username: username,
    token: token
  };
}
export function logout() {
  return {
    type: LOGOUT
  };
}
export function setAreaFilter(area) {
  const splitArea = area.split("-");
  return {
    type: SET_AREA_FILTER,
    areaFilter: splitArea
  };
}

export function setProperties(properties) {
  return {
    type: SET_PROPERTIES,
    properties
  };
}

export function setPremisyFilter(premisyFilter) {
  return {
    type: SET_PREMISY_FILTER,
    premisyFilter
  };
}

export function setChosenProperty(chosenProperty) {
  return {
    type: SET_CHOSEN_PROPERTY,
    chosenProperty
  };
}
