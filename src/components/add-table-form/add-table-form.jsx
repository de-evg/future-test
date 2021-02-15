import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import { showingStatus } from "../../const";
import { ActionCreator } from "../../store/action";

const tableHeads = [`ID`, `First Name`, `Last Name`, `Email`, `Phone`];

const AddTableForm = ({ addRowFormVisualStatus, submitNewRow, users }) => {
  let visualClass = "";
  if (addRowFormVisualStatus === showingStatus.HIDE) {
    visualClass = "add-row-form--hidden";
  }
  if (addRowFormVisualStatus === showingStatus.SHOW) {
    visualClass = "add-row-form--show";
  }

  const validate = (values) => {
    const errors = {};
    const validateID = (value) => {
      const index = users.findIndex((user) => user.id === value);
      return index === -1;
    };

    if (!values.id) {
      errors.id = { borderColor: "red" };
    } else if (!validateID(values.id)) {      
      errors.id = !validateID(values.id) ? (errors.id = { borderColor: "red" }) : null;
    }

    if (!values.firstName) {
      errors.firstName = { borderColor: "red" };
    } else if (values.firstName.lenght > 15) {
      errors.firstName = { borderColor: "red" };
    }

    if (!values.lastName) {
      errors.lastName = { borderColor: "red" };
    } else if (!values.lastName.length > 20) {
      errors.lastName = { borderColor: "red" };
    }

    if (!values.email) {
      errors.email = { borderColor: "red" };
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = { borderColor: "red" };
    }

    if (!values.phone) {
      errors.phone = { borderColor: "red" };
    } else if (
      !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(values.phone)
    ) {
      errors.phone = { borderColor: "red" };
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validate,
    onSubmit: (values, actions) => {
      submitNewRow(values);
      actions.resetForm({
        values: {
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        },
      });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      action="#"
      className={`add-row-form ${visualClass}`}
    >
      <table className="table">
        <thead>
          <tr className="table__header table__row">
            {tableHeads.map((head, i) => (
              <th key={`head-${i}`} className="table__column-title table__data">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="table__row">
            <td className="table__data">
              <input
                style={formik.errors.id}
                id="id"
                name="id"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.id}
                placeholder="ID"
                required
              />
            </td>
            <td className="table__data">
              <input
                style={formik.errors.firstName}
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                placeholder="Имя"
                required
              />
            </td>
            <td className="table__data">
              <input
                style={formik.errors.lastName}
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                placeholder="Фамилия"
                required
              />
            </td>
            <td className="table__data">
              <input
                style={formik.errors.email}
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="your@email.ru"
                required
              />
            </td>
            <td className="table__data">
              <input
                style={formik.errors.phone}
                id="phone"
                name="phone"
                type="tel"
                onChange={formik.handleChange}
                value={formik.values.phone}
                placeholder="+7 999 99 99"
                required
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="add-row-form__button"></button>
    </form>
  );
};

AddTableForm.propTypes = {
  addRowFormVisualStatus: PropTypes.string.isRequired,
  resetInputs: PropTypes.func.isRequired,
  submitNewRow: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  addRowFormVisualStatus:
    state[NameSpace.INTERFACE_DATA].addRowFormVisualStatus,
  users: state[NameSpace.USERS_DATA].users,
});

const mapDispatchToProps = (dispatch) => ({
  submitNewRow(newRow) {
    dispatch(ActionCreator.submitNewRow(newRow));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTableForm);
