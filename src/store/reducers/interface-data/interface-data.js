/* eslint-disable default-case */
import {showingStatus} from "../../../const";
import {ActionType} from "../../action";

const initialState = {
  addRowFormVisualStatus: showingStatus.UNSET,
  searchFormVisualStatus: showingStatus.UNSET,
  activeRow: showingStatus.UNSET
};

export const interfaceData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_VISUALLY_SEARCH_FORM:
      if (state.searchFormVisualStatus === showingStatus.SHOW) {
        return {...state, ...{searchFormVisualStatus: showingStatus.HIDE}}
      } else {
        return {...state, ...{searchFormVisualStatus: showingStatus.SHOW}, ...{addRowFormVisualStatus: showingStatus.HIDE}}
      }

    case ActionType.UPDATE_VISUALLY_ADD_ROW_FORM:
      if (state.addRowFormVisualStatus === showingStatus.SHOW) {
        return {...state, ...{addRowFormVisualStatus: showingStatus.HIDE}}
      } else {
        return {...state, ...{addRowFormVisualStatus: showingStatus.SHOW}, ...{searchFormVisualStatus: showingStatus.HIDE}}
      }

    case ActionType.UPDATE_ACTIVE_ROW:
      return {...state, ...{activeRow: action.payload}}
  }
  return state;
};
