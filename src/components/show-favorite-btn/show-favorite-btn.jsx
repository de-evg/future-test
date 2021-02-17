import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSmallUsers } from "../../store/api-action";
import { ActionCreator } from "../../store/action";

const ShowFavoriteBtn = ({ loadSmallData, setIsLoadingStatus }) => {
  const handleClick = useCallback(() => {
    setIsLoadingStatus(true);
    loadSmallData();
  }, [loadSmallData, setIsLoadingStatus]);

  return (
    <button className="main-menu__button button" onClick={handleClick}>
      Показать избранное
    </button>
  );
};

ShowFavoriteBtn.propTypes = {
  loadSmallData: PropTypes.func.isRequired,
  setIsLoadingStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loadSmallData() {
    dispatch(fetchSmallUsers());
  },
  setIsLoadingStatus(status) {
    dispatch(ActionCreator.updateLoadingStatus(status));
  },
});

export { ShowFavoriteBtn };
export default connect(null, mapDispatchToProps)(ShowFavoriteBtn);
