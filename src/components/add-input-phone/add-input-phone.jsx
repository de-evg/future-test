import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/action";
import {NameSpace} from '../../store/reducers/root';

const AddInputPhone = ({phone, updateInput}) => {
  const handleChange = useCallback((evt) => {
    evt.preventDefault();
    updateInput({phone: evt.target.value})
  }, [updateInput])

  return (
    <input id="id" type="text" value={phone} onChange={handleChange} />
  );
};

AddInputPhone.propTypes = {
    phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  updateInput: PropTypes.func.isRequired
}

const mapStateToProps = (state) => (({
    phone: state[NameSpace.NEW_ROW].phone
}));

const mapDispatchToProps = (dispatch) => ({
  updateInput(newValue) {
    dispatch(ActionCreator.updateNewRow(newValue))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddInputPhone);
