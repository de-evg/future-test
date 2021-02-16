import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { NameSpace } from "../../store/reducers/root";
import { showingStatus } from "../../const";
import { ActionCreator } from "../../store/action";
import { useFormik } from "formik";

const Search = ({ searchFormVisualStatus, setFilter }) => {
  let visualClass = "";
  if (searchFormVisualStatus === showingStatus.HIDE) {
    visualClass = "search-form--hidden";
  }
  if (searchFormVisualStatus === showingStatus.SHOW) {
    visualClass = "search-form--show";
  }

  const formik = useFormik({
    initialValues: {
      filter: "",
    },
    onSubmit: (values) => {
      setFilter(values.filter);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`search-form ${visualClass}`}
      action="#"
    >
      <input
        id="filter"
        className="search-input"
        type="text"
        onChange={formik.handleChange}
      />
      <button className="search-button" type="submit">
        Найти
      </button>
    </form>
  );
};

Search.propTypes = {
  searchFormVisualStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  searchFormVisualStatus:
    state[NameSpace.INTERFACE_DATA].searchFormVisualStatus,
});

const mapDispatchToProps = (dispatch) => ({
  setFilter(filter) {
    dispatch(ActionCreator.updateFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
