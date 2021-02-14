import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/action";
import {NameSpace} from '../../store/reducers/root';

const AddInputID = ({id, updateInput}) => {
  const handleChange = useCallback((evt) => {
    evt.preventDefault();
    updateInput({id: evt.target.value})
  }, [updateInput])

  return (
    <input id="id" type="number" value={id} onChange={handleChange} />
  );
};

AddInputID.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  updateInput: PropTypes.func.isRequired
}

const mapStateToProps = (state) => (({
  id: state[NameSpace.NEW_ROW].id
}));

const mapDispatchToProps = (dispatch) => ({
  updateInput(newValue) {
    dispatch(ActionCreator.updateNewRow(newValue))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddInputID);
