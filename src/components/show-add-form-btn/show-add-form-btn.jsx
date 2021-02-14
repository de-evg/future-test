import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {NameSpace} from '../../store/reducers/root';
import {showingStatus} from '../../const';

const ShowAddFormBtn = ({updateShowStatus, addRowFormVisualStatus}) => {
  const handleClick = useCallback(() => {
    updateShowStatus();
  }, [updateShowStatus]);
  const activeClass = addRowFormVisualStatus === showingStatus.SHOW ? "button--active" : "";
  return (
    <button className={`main-menu__button button ${activeClass}`} onClick={handleClick}>Добавить строку</button>
  );
};

ShowAddFormBtn.propTypes = {
  updateShowStatus: PropTypes.func.isRequired,
  addRowFormVisualStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  addRowFormVisualStatus: state[NameSpace.INTERFACE_DATA].addRowFormVisualStatus
});

const mapDispatchToProps = (dispatch) => ({
  updateShowStatus() {
    dispatch(ActionCreator.updateAddRowFormStatus());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowAddFormBtn);