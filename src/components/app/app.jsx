import React from "react";
import PropTypes from "prop-types";
import Table from "../table/table";
import Search from "../search/search";
import MainTableBody from "../main-table-body/main-table-body";
import AddTableForm from "../add-table-form/add-table-form";
import MainMenu from "../main-menu/main-menu";
import { connect } from "react-redux";
import { NameSpace } from "../../store/reducers/root";
import { showingStatus } from "../../const";
import TableHead from "../main-table-head/main-table-head";
import Pagination from "../pagination/pagination";
import Loader from "../loader/loader";

const App = ({
  addRowFormVisualStatus,
  searchFormVisualStatus,
  isLoading,
  users,
}) => {
  let visualClass = "";
  if (
    addRowFormVisualStatus === showingStatus.HIDE ||
    searchFormVisualStatus === showingStatus.HIDE
  ) {
    visualClass = "container--hidden";
  }
  if (
    addRowFormVisualStatus === showingStatus.SHOW ||
    searchFormVisualStatus === showingStatus.SHOW
  ) {
    visualClass = "container--show";
  }
  return (
    <>
      <MainMenu />
      <div className={`container ${visualClass}`}>
        <AddTableForm />
        <Search />
      </div>
      {isLoading && <Loader />}
      {(!isLoading && !!users.length) && (
        <>
          <Table TableHead={<TableHead />} TableBody={<MainTableBody />} />
          <Pagination />
        </>
      )}
    </>
  );
};

App.propTypes = {
  addRowFormVisualStatus: PropTypes.string.isRequired,
  searchFormVisualStatus: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  addRowFormVisualStatus:
    state[NameSpace.INTERFACE_DATA].addRowFormVisualStatus,
  searchFormVisualStatus:
    state[NameSpace.INTERFACE_DATA].searchFormVisualStatus,
  users: state[NameSpace.USERS_DATA].users,
  isLoading: state[NameSpace.INTERFACE_DATA].isLoading,
});

export {App};
export default connect(mapStateToProps)(App);
