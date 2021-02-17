import { createSelector } from "reselect";
import { sortUsers } from "../utils/sort";
import { NameSpace } from "./reducers/root";

export const getFilteredUsers = createSelector(
  (state) => state[NameSpace.USERS_DATA].users,
  (state) => state[NameSpace.USERS_DATA].filter,
  (state) => state[NameSpace.USERS_DATA].activeSort,
  (users, filter, activeSort) => {
    let filteredUsers = [...users];
    if (filter) {
      filteredUsers = users.filter((user) => {
        return Object.keys(user).some((key) =>
          user[key].toString().includes(filter)
        );
      });
    }
    return sortUsers(activeSort, filteredUsers);
  }
);
