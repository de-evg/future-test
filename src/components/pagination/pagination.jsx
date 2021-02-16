import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { STEP } from "../../const";
import { ActionCreator } from "../../store/action";
import { NameSpace } from "../../store/reducers/root";

const START_PAGE = 1;

const Pagination = ({ users, currentStep, setStep }) => {
  const maxPage = Math.ceil(users.length / STEP);
  const currentPage = Math.ceil(currentStep / STEP);

  const handlePrevBtnClick = useCallback(() => {
    setStep(currentStep - STEP);
  }, [setStep, currentStep]);

  const handleNextBtnClick = useCallback(() => {
    setStep(currentStep + STEP);
  }, [setStep, currentStep]);

  const handleLastPageBtnClick = useCallback(() => {
    setStep(maxPage * STEP);
  }, [setStep, maxPage]);

  const handleFirstPageBtnClick = useCallback(() => {
    setStep(STEP);
  }, [setStep]);

  return (
    <div className="pagination">
      <button
        disabled={currentPage === START_PAGE}
        onClick={handlePrevBtnClick}
        className="pagination__arrow-left"
      ></button>
      <ul>
        <li className="pagination__firstPage">
          {currentPage !== START_PAGE && (
            <button onClick={handleFirstPageBtnClick} href="#">
              {START_PAGE}
            </button>
          )}
        </li>
        <li className="pagination__current">{currentPage}</li>
        <li className="pagination__lastPage">
          {currentPage !== maxPage && (
            <button onClick={handleLastPageBtnClick} href="#">
              {maxPage}
            </button>
          )}
        </li>
      </ul>
      <button
        disabled={currentPage === maxPage}
        onClick={handleNextBtnClick}
        className="pagination__arrow-right"
      ></button>
    </div>
  );
};

Pagination.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state[NameSpace.USERS_DATA].users,
  currentStep: state[NameSpace.USERS_DATA].currentStep,
});

const mapDispatchToProps = (dispatch) => ({
  setStep(newStep) {
    dispatch(ActionCreator.updateCurrentStep(newStep));
  },
});

export {Pagination};
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
