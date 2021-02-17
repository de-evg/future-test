import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import { NameSpace } from "../../store/reducers/root";
import { showingStatus } from "../../const";

const ShowSearchFormBtn = ({
  updateShowStatus,
  searchFormVisualStatus,
  users,
  isLoading,
}) => {
  const handleClick = useCallback(() => {
    updateShowStatus();
  }, [updateShowStatus]);
  const activeClass =
    searchFormVisualStatus === showingStatus.SHOW ? "button--active" : "";
  return (
    <button
      className={`main-menu__button button ${activeClass}`}
      onClick={handleClick}
      disabled={isLoading || !users.length}
    >
      Найти
    </button>
  );
};

ShowSearchFormBtn.propTypes = {
  updateShowStatus: PropTypes.func.isRequired,
  searchFormVisualStatus: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  searchFormVisualStatus:
    state[NameSpace.INTERFACE_DATA].searchFormVisualStatus,
  users: state[NameSpace.USERS_DATA].users,
  isLoading: state[NameSpace.INTERFACE_DATA].isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  updateShowStatus() {
    dispatch(ActionCreator.updateSearchFormStatus());
  },
});

export { ShowSearchFormBtn };
export default connect(mapStateToProps, mapDispatchToProps)(ShowSearchFormBtn);
