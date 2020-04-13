import {
  LOGIN,
  LOGOUT,
  SET_AREA_FILTER,
  SET_PROPERTIES,
  SET_PREMISY_FILTER,
  SET_CHOSEN_PROPERTY
} from "../actionTypes";

const initialState = {
  username: "",
  token: "",
  properties: []
};

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        username: action.username,
        token: action.token.token
      };
    }
    case LOGOUT: {
      return {
        ...state,
        username: "",
        token: ""
      };
    }
    case SET_AREA_FILTER: {
      return {
        ...state,
        areaFilter: action.areaFilter
      };
    }
    case SET_PROPERTIES: {
      return {
        ...state,
        properties: action.properties
      };
    }
    case SET_PREMISY_FILTER: {
      return {
        ...state,
        premisyFilter: action.premisyFilter
      };
    }
    case SET_CHOSEN_PROPERTY: {
      return {
        ...state,
        chosenProperty: action.chosenProperty
      };
    }

    default:
      return state;
  }
}
export default auth;
