import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/action";
import {NameSpace} from '../../store/reducers/root';

const AddInputFirstname = ({firstName, updateInput}) => {
  const handleChange = useCallback((evt) => {
    evt.preventDefault();
    updateInput({firstName: evt.target.value, isFirstNameValid: true})
  }, [updateInput])

  return (
    <input id="id" type="text" value={firstName} onChange={handleChange} placeholder="Имя" required />
  );
};

AddInputFirstname.propTypes = {
  firstName: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired
}

const mapStateToProps = (state) => (({
  firstName: state[NameSpace.NEW_ROW].firstName
}));

const mapDispatchToProps = (dispatch) => ({
  updateInput(newValue) {
    dispatch(ActionCreator.updateNewRow(newValue))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddInputFirstname);
