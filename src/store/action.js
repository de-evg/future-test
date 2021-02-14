export const ActionType = {
  ON_LOAD: `ON_LOAD`,
  UPDATE_VISUALLY_SEARCH_FORM: `UPDATE_VISUALLY_SEARCH_FORM`,
  UPDATE_VISUALLY_ADD_ROW_FORM: `UPDATE_VISUALLY_ADD_ROW_FORM`,
  UPDATE_NEW_ROW: `UPDATE_NEW_ROW`,
  UPDATE_USERS: `UPDATE_USERS`,
  RESET_NEW_ROW: `RESET_NEW_ROW`,
  UPDATE_ACTIVE_ROW: `UPDATE_ACTIVE_ROW`
};

export const ActionCreator = {
  updateSearchFormStatus: () => ({
    type: ActionType.UPDATE_VISUALLY_SEARCH_FORM
  }),
  updateAddRowFormStatus: () => ({
    type: ActionType.UPDATE_VISUALLY_ADD_ROW_FORM
  }),
  submitNewRow: (newRow) => ({
    type: ActionType.UPDATE_USERS,
    payload: newRow
  }),
  updateNewRow: (newInputValue) => ({
    type: ActionType.UPDATE_NEW_ROW,
    payload: newInputValue
  }),
  resetNewRow: () => ({
    type: ActionType.RESET_NEW_ROW
  }),
  updateActiveRow: (activeRow) => ({
    type: ActionType.UPDATE_ACTIVE_ROW,
    payload: activeRow
  })
};