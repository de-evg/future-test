/* eslint-disable default-case */
import { DEFAULT_SORT } from "../../../const";
import { ActionType } from "../../action";

const initialState = {
  users: [
    {
      id: 2,
      firstName: `Petr`,
      lastName: `Petrov`,
      email: `petr@mail.ru`,
      phone: `89175507671`,
      address: {
        streetAddress: "9792 Mattis Ct",
        city: "Waukesha",
        state: "WI",
        zip: "22178",
      },
      description: "et lacus magna dolor...",
    },
    {
      id: 1,
      firstName: `Ivan`,
      lastName: `Ivanov`,
      email: `iven@mail.ru`,
      phone: `89167707272`,
      address: {
        streetAddress: "9792 Mattis Ct",
        city: "Waukesha",
        state: "WI",
        zip: "22178",
      },
      description: "et lacus magna dolor...",
    },
  ],
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
    case ActionType.ON_LOAD:
      return { ...state, ...action.payload };

    case ActionType.UPDATE_USERS:
      const newUsers = updateUsers(state.users, action.payload);
      return { ...state, ...{ users: newUsers } };

    case ActionType.UPDATE_SORT:
      return { ...state, activeSort: action.payload };
  }
  return state;
};
