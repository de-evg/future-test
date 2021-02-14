/* eslint-disable default-case */
import {ActionType} from "../../action";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: ""
};

export const newRow = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_NEW_ROW:
      return {...state, ...action.payload}
    case ActionType.RESET_NEW_ROW:
      return {...state, ...initialState}
  }
  return state;
};