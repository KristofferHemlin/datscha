import {
  LOGIN,
  LOGOUT,
  SET_AREA_FILTER,
  SET_PROPERTIES,
  SET_PREMISY_FILTER,
  SET_CHOSEN_PROPERTY
} from "../actionTypes";

export const login = (username, token) => {
  return {
    type: LOGIN,
    username: username,
    token: token
  };
};
export const logout = () => {
  return {
    type: LOGOUT
  };
};
export const setAreaFilter = area => {
  const splitArea = area.split("-");
  return {
    type: SET_AREA_FILTER,
    areaFilter: splitArea
  };
};

export const setProperties = properties => {
  return {
    type: SET_PROPERTIES,
    properties
  };
};

export const setPremisyFilter = premisyFilter => {
  return {
    type: SET_PREMISY_FILTER,
    premisyFilter
  };
};

export const setChosenProperty = chosenProperty => {
  return {
    type: SET_CHOSEN_PROPERTY,
    chosenProperty
  };
};
