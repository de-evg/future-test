import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NameSpace} from '../../store/reducers/root';
import MainTableRow from "../main-table-row/main-table-row";
import {ActionCreator} from '../../store/action';
import {getFilteredUsers} from '../../store/selectors';
import {STEP} from '../../const';

const MainTableBody = ({users, activeRow, setActiveRow, currentStep}) => {
  return (
    <tbody>
      {users.slice().slice(currentStep - STEP, currentStep).map((user, i) => (
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
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })),
  activeRow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setActiveRow: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  updateCurrentStep: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  users: getFilteredUsers(state),
  activeRow: state[NameSpace.INTERFACE_DATA].activeRow,
  currentStep: state[NameSpace.USERS_DATA].currentStep
});

const mapDispatchToProps = (dispatch) => ({
  setActiveRow(activeRow) {
    dispatch(ActionCreator.updateActiveRow(activeRow))
  },
  updateCurrentStep(step) {
    dispatch(ActionCreator.updateCurrentStep(step))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MainTableBody);
