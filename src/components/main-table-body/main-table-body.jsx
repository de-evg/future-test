import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import MainTableRow from "../main-table-row/main-table-row";
import { ActionCreator } from "../../store/action";
import { getFilteredUsers } from "../../store/selectors";
import { STEP } from "../../const";

const MainTableBody = ({
  users,
  activeRow,
  setActiveRow,
  currentStep,
  updateCount,
}) => {
  useEffect(() => {
    updateCount(users.length);
  }, [updateCount, users]);
  return (
    <tbody>
      {users.slice(currentStep - STEP, currentStep).map((user, i) => (
        <MainTableRow
          rowID={`row${i}`}
          key={`row-${i}`}
          user={user}
          activeRow={activeRow}
          setActiveRow={setActiveRow}
        />
      ))}
    </tbody>
  );
};

MainTableBody.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeRow: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  setActiveRow: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  updateCount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: getFilteredUsers(state),
  activeRow: state[NameSpace.INTERFACE_DATA].activeRow,
  currentStep: state[NameSpace.USERS_DATA].currentStep,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveRow(activeRow) {
    dispatch(ActionCreator.updateActiveRow(activeRow));
  },
  updateCount(count) {
    dispatch(ActionCreator.updateUserCount(count));
  },
});

export { MainTableBody };
export default connect(mapStateToProps, mapDispatchToProps)(MainTableBody);
