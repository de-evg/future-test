import { combineReducers } from "redux";
import { usersData } from "./users-data/users-data";
import { interfaceData } from "./interface-data/interface-data";
import { newRow } from "./new-row/new-row";

const NameSpace = {
  USERS_DATA: `USERS_DATA`,
  INTERFACE_DATA: `INTERFACE_DATA`,
  NEW_ROW: `NEW_ROW`,
};

export { NameSpace };
export default combineReducers({
  [NameSpace.USERS_DATA]: usersData,
  [NameSpace.INTERFACE_DATA]: interfaceData,
  [NameSpace.NEW_ROW]: newRow,
});
