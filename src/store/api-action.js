import { APIRoute } from "../const";
import { ActionCreator } from "./action";

export const fetchFullUsers = () => (dispatch, _getState, api) =>
  api
    .getUsers(APIRoute.FULL)
    .then((users) => {
      dispatch(ActionCreator.updateLoadingStatus(false));
      return users;
    })
    .then((users) => dispatch(ActionCreator.fetchUsers(users)));

export const fetchSmallUsers = () => (dispatch, _getState, api) =>
  api
    .getUsers(APIRoute.SMALL)
    .then((users) => {
      dispatch(ActionCreator.updateLoadingStatus(false));
      return users;
    })
    .then((users) => dispatch(ActionCreator.fetchUsers(users)));
