export const ActionType = {
  LOAD: `LOAD`,
  UPDATE_VISUALLY_SEARCH_FORM: `UPDATE_VISUALLY_SEARCH_FORM`,
  UPDATE_VISUALLY_ADD_ROW_FORM: `UPDATE_VISUALLY_ADD_ROW_FORM`,
  UPDATE_NEW_ROW: `UPDATE_NEW_ROW`,
  UPDATE_USERS: `UPDATE_USERS`,
  RESET_NEW_ROW: `RESET_NEW_ROW`,
  UPDATE_ACTIVE_ROW: `UPDATE_ACTIVE_ROW`,
  UPDATE_SORT: `UPDATE_SORT`,
  UPDATE_FILTER: `UPDATE_FILTER`,
  UPDATE_STEP: `UPDATE_STEP`,
  UPDATE_LOADING_STATUS: `UPDATE_LOADING_STATUS`
};

export const ActionCreator = {
  fetchUsers: (users) => ({
    type: ActionType.LOAD,
    payload: users
  }),
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
  }),
  updateSort: (sort) => ({
    type: ActionType.UPDATE_SORT,
    payload: sort
  }),
  updateFilter: (filter) => ({
    type: ActionType.UPDATE_FILTER,
    payload: filter
  }),
  updateCurrentStep: (step) => ({
    type: ActionType.UPDATE_STEP,
    payload: step
  }),
  updateLoadingStatus: (isLoading) => ({
    type: ActionType.UPDATE_LOADING_STATUS,
    payload: isLoading
  })
};