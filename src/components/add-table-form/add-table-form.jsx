import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import Table from '../table/table';
import AddTableBody from "../add-table-body/add-table-body";
import {connect} from 'react-redux';
import {NameSpace} from '../../store/reducers/root';
import {showingStatus} from '../../const';
import {ActionCreator} from "../../store/action";

const AddTableForm = ({
  addRowFormVisualStatus, 
  submitNewRow, 
  resetInputs, 
  id, 
  firstName, 
  lastName, 
  email, 
  phone, 
  isIdValid,
  isFirstNameValid,
  isLastNameValid,
  isPhoneValid,
  isEmailValid}) => {
    
  let visualClass = "";
  if (addRowFormVisualStatus === showingStatus.HIDE) {
    visualClass = "add-row-form--hidden";
  }
  if (addRowFormVisualStatus === showingStatus.SHOW) {
    visualClass = "add-row-form--show";
  }

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    if (isIdValid && isFirstNameValid && isLastNameValid && isPhoneValid && isEmailValid) {
      submitNewRow({
        id, firstName, lastName, email, phone
      });
      resetInputs();
    }    
  }, [submitNewRow, resetInputs, id, firstName, lastName, email, phone,isIdValid, isFirstNameValid, isLastNameValid, isPhoneValid, isEmailValid]);

  return (
    <form onSubmit={handleSubmit} action="#" className={`add-row-form ${visualClass}`}>
      <Table tableBody={<AddTableBody />} />
      <button type="submit" className="add-row-form__button"></button>
    </form>
  );
};

AddTableForm.propTypes = {
  addRowFormVisualStatus: PropTypes.string.isRequired,
  resetInputs: PropTypes.func.isRequired,
  submitNewRow: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isIdValid: PropTypes.bool.isRequired,
  isFirstNameValid: PropTypes.bool.isRequired,
  isLastNameValid: PropTypes.bool.isRequired,
  isPhoneValid: PropTypes.bool.isRequired,
  isEmailValid: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  addRowFormVisualStatus: state[NameSpace.INTERFACE_DATA].addRowFormVisualStatus,
  id: state[NameSpace.NEW_ROW].id,
  firstName: state[NameSpace.NEW_ROW].firstName,
  lastName: state[NameSpace.NEW_ROW].lastName,
  phone: state[NameSpace.NEW_ROW].phone,
  email: state[NameSpace.NEW_ROW].email,
  isIdValid: state[NameSpace.NEW_ROW].isIdValid,
  isFirstNameValid: state[NameSpace.NEW_ROW].isFirstNameValid,
  isLastNameValid: state[NameSpace.NEW_ROW].isLastNameValid,
  isPhoneValid: state[NameSpace.NEW_ROW].isPhoneValid,
  isEmailValid: state[NameSpace.NEW_ROW].isEmailValid,
});

const mapDispatchToProps = (dispatch) => ({
  submitNewRow(newRow) {
    dispatch(ActionCreator.submitNewRow(newRow))
  },
  resetInputs() {
    dispatch(ActionCreator.resetNewRow())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTableForm);
