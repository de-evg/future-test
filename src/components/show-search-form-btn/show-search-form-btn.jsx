import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {NameSpace} from '../../store/reducers/root';
import {showingStatus} from '../../const';

const ShowSearchFormBtn = ({updateShowStatus, searchFormVisualStatus}) => {
  const handleClick = useCallback(() => {
    updateShowStatus();
  }, [updateShowStatus]);
  const activeClass = searchFormVisualStatus === showingStatus.SHOW ? "button--active" : "";
  return (
    <button className={`main-menu__button button ${activeClass}`} onClick={handleClick}>Найти</button>
  );
};

ShowSearchFormBtn.propTypes = {
  updateShowStatus: PropTypes.func.isRequired,
  searchFormVisualStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  searchFormVisualStatus: state[NameSpace.INTERFACE_DATA].searchFormVisualStatus
});

const mapDispatchToProps = (dispatch) => ({
  updateShowStatus() {
    dispatch(ActionCreator.updateSearchFormStatus());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowSearchFormBtn);