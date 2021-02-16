import { createSelector } from "reselect";
import { SortType } from "../const";
import { NameSpace } from "./reducers/root";

const sort = (itemA, itemB) => {
  if (itemA < itemB) return -1;
  if (itemA > itemB) return 1;
  return 0;
};

const sortUsers = (sortType, users) => {
  switch (sortType) {
    case SortType.ID_UP:
      return users.sort((userA, userB) => sort(userA.id, userB.id));
    case SortType.ID_DOWN:
      return users.sort((userA, userB) => sort(userB.id, userA.id));
    case SortType.FIRSTNAME_UP:
      return users.sort((userA, userB) => sort(userA.firstName, userB.firstName));
    case SortType.FIRSTNAME_DOWN:
      return users.sort((userA, userB) => sort(userB.firstName, userA.firstName));
    case SortType.LASTNAME_UP:
      return users.sort((userA, userB) => sort(userA.lastName, userB.lastName));
    case SortType.LASTNAME_DOWN:
      return users.sort((userA, userB) => sort(userB.lastName, userA.lastName));
    case SortType.EMAIL_UP:
      return users.sort((userA, userB) => sort(userA.email, userB.email));
    case SortType.EMAIL_DOWN:
      return users.sort((userA, userB) => sort(userB.email, userA.email));
    case SortType.PHONE_UP:
      return users.sort((userA, userB) => sort(userA.phone, userB.phone));
    case SortType.PHONE_DOWN:
      return users.sort((userA, userB) => sort(userB.phone, userA.phone));
    default:
      return users;
  }
};

export const getFilteredUsers = createSelector(
  (state) => state[NameSpace.USERS_DATA].users,
  (state) => state[NameSpace.USERS_DATA].filter,
  (state) => state[NameSpace.USERS_DATA].activeSort,
  (users, filter, activeSort) => {
    let filteredUsers = [...users];
    if (filter) {
      filteredUsers = users.filter((user) => {
        return Object.keys(user).some((key) => user(key).includes(filter));
      });
    }
    return sortUsers(activeSort, filteredUsers);
  }
);
