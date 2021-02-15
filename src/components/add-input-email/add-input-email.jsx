import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/action";
import {NameSpace} from '../../store/reducers/root';

const AddInputEmail = ({email, updateInput}) => {
  const handleChange = useCallback((evt) => {
    evt.preventDefault();
    updateInput({email: evt.target.value, isEmailValid: true})
  }, [updateInput])

  return (
    <input id="id" type="email" value={email} onChange={handleChange} placeholder="your@email.ru" required />
  );
};

AddInputEmail.propTypes = {
  email: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  email: state[NameSpace.NEW_ROW].email
});

const mapDispatchToProps = (dispatch) => ({
  updateInput(newValue) {
    dispatch(ActionCreator.updateNewRow(newValue))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddInputEmail);
