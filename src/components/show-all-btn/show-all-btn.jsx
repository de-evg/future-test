import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchFullUsers } from "../../store/api-action";
import { ActionCreator } from "../../store/action";

const ShowAllBtn = ({ loadFullData, setIsLoadingStatus }) => {
  const handleClick = useCallback(() => {
    setIsLoadingStatus(true);
    loadFullData();
  }, [loadFullData, setIsLoadingStatus]);

  return (
    <button className="main-menu__button button" onClick={handleClick}>
      Показать все
    </button>
  );
};

ShowAllBtn.propTypes = {
  loadFullData: PropTypes.func.isRequired,
  setIsLoadingStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loadFullData() {
    dispatch(fetchFullUsers());
  },
  setIsLoadingStatus(status) {
    dispatch(ActionCreator.updateLoadingStatus(status));
  },
});

export { ShowAllBtn };
export default connect(null, mapDispatchToProps)(ShowAllBtn);
