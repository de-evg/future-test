import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/action";
import {NameSpace} from '../../store/reducers/root';

const AddInputLastname = ({lastName, updateInput}) => {
  const handleChange = useCallback((evt) => {
    evt.preventDefault();
    updateInput({lastName: evt.target.value, isLastNameValid: true})
  }, [updateInput])

  return (
    <input id="id" type="text" value={lastName} onChange={handleChange} placeholder="Фамилия" required />
  );
};

AddInputLastname.propTypes = {
  lastName: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired
}

const mapStateToProps = (state) => (({
  lastName: state[NameSpace.NEW_ROW].lastName
}));

const mapDispatchToProps = (dispatch) => ({
  updateInput(newValue) {
    dispatch(ActionCreator.updateNewRow(newValue))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddInputLastname);
