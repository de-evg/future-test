import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import { NameSpace } from "../../store/reducers/root";

const AddInputID = ({ id, updateInput, users }) => {
  const idRef = useRef();

  const handleChange = useCallback(
    (evt) => {
      evt.preventDefault();

      const validateInput = (value) => {
        const index = users.findIndex((user) => user.id === value);
        return index === -1;
      };

      const isValid = validateInput(+evt.target.value);

      if (isValid) {
        idRef.current.style.borderColor = "#d2e7e6";
      } else {
        idRef.current.style.borderColor = "red";
      }
      updateInput({ id: +evt.target.value, isIdValid: isValid });
    },
    [updateInput, users]
  );

  return (
    <input
      ref={idRef}
      id="id"
      type="number"
      value={id}
      onChange={handleChange}
      placeholder="ID"
      required
    />
  );
};

AddInputID.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  updateInput: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      address: PropTypes.shape({
        streetAddress: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zip: PropTypes.string,
      }),
      description: PropTypes.string,
    })
  ),
};

const mapStateToProps = (state) => ({
  id: state[NameSpace.NEW_ROW].id,
  users: state[NameSpace.USERS_DATA].users,
});

const mapDispatchToProps = (dispatch) => ({
  updateInput(newValue) {
    dispatch(ActionCreator.updateNewRow(newValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddInputID);
