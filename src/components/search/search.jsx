import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NameSpace} from '../../store/reducers/root';
import {showingStatus} from '../../const';

const Search = ({searchFormVisualStatus}) => {
  let visualClass = "";
  if (searchFormVisualStatus === showingStatus.HIDE) {
    visualClass = "search-form--hidden";
  }
  if (searchFormVisualStatus === showingStatus.SHOW) {
    visualClass = "search-form--show";
  }
  return (
    <form className={`search-form ${visualClass}`} action="#">
      <input id="search" className="search-input" type="text" />
      <button className="search-button" type="submit">Найти</button>
    </form>
  );
};

Search.propTypes = {
  searchFormVisualStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  searchFormVisualStatus: state[NameSpace.INTERFACE_DATA].searchFormVisualStatus
});

export default connect(mapStateToProps)(Search);
