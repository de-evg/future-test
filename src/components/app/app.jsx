import React from 'react';
import PropTypes from 'prop-types';
import Table from '../table/table';
import Search from "../search/search";
import MainTableBody from "../main-table-body/main-table-body";
import AddTableForm from '../add-table-form/add-table-form';
import MainMenu from '../main-menu/main-menu';
import {connect} from 'react-redux';
import {NameSpace} from '../../store/reducers/root';
import {showingStatus} from '../../const';
import TableHead from '../main-table-head/main-table-head';

const App = ({addRowFormVisualStatus, searchFormVisualStatus}) => {
  let visualClass = "";
  if (addRowFormVisualStatus === showingStatus.HIDE || searchFormVisualStatus === showingStatus.HIDE) {
    visualClass = "container--hidden";
  }
  if (addRowFormVisualStatus === showingStatus.SHOW || searchFormVisualStatus === showingStatus.SHOW) {
    visualClass = "container--show";
  }
  return (
    <>
      <MainMenu />
      <div className={`container ${visualClass}`}>
        <AddTableForm />
        <Search />
      </div>
      <Table  TableHead={<TableHead />} TableBody={<MainTableBody />} />
    </>
  );
};

App.propTypes = {
  addRowFormVisualStatus: PropTypes.string.isRequired,
  searchFormVisualStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  addRowFormVisualStatus: state[NameSpace.INTERFACE_DATA].addRowFormVisualStatus,
  searchFormVisualStatus: state[NameSpace.INTERFACE_DATA].searchFormVisualStatus
});

export default connect(mapStateToProps)(App);
