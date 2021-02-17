/* eslint-disable default-case */
import { DEFAULT_SORT } from "../../../const";
import { ActionType } from "../../action";

const initialState = {
  users: [],
  userCount: 0,
  currentStep: 50,
  filter: "",
  activeSort: DEFAULT_SORT,
};

const updateUsers = (users, update) => {
  const updateWithTemplate = {
    ...update,
    address: {
      streetAddress: "",
      city: "",
      state: "",
      zip: "",
    },
    description: "",
  };
  return [updateWithTemplate, ...users];
};

export const usersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD:
      return { ...state, users: action.payload };

    case ActionType.UPDATE_USERS:
      const newUsers = updateUsers(state.users, action.payload);
      return { ...state, ...{ users: newUsers } };

    case ActionType.UPDATE_SORT:
      return { ...state, activeSort: action.payload };

    case ActionType.UPDATE_FILTER:
      return { ...state, filter: action.payload };

    case ActionType.UPDATE_STEP:
      return { ...state, currentStep: action.payload };

    case ActionType.UPDATE_USER_COUNT:
      return { ...state, userCount: action.payload };
  }
  return state;
};
