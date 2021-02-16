import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { NameSpace } from "../../store/reducers/root";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";

const tableHeads = [`ID`, `First Name`, `Last Name`, `Email`, `Phone`];
const HeadValues = {
  [`ID`]: `ID`,
  [`First Name`]: `FIRSTNAME`,
  [`Last Name`]: `LASTNAME`,
  [`Email`]: `EMAIL`,
  [`Phone`]: `PHONE`
};

const SortName = {
  [`ID`]: (activeSort) => activeSort === `ID_UP` ? `ID_DOWN` : `ID_UP`,
  [`First Name`]: (activeSort) =>  activeSort === `FIRSTNAME_UP` ? `FIRSTNAME_DOWN` : `FIRSTNAME_UP`,
  [`Last Name`]: (activeSort) =>  activeSort === `LASTNAME_UP` ? `LASTNAME_DOWN` : `LASTNAME_UP`, 
  [`Email`]: (activeSort) => activeSort === `EMAIL_UP` ? `EMAIL_DOWN` : `EMAIL_UP`,
  [`Phone`]: (activeSort) => activeSort === `PHONE_UP` ? `PHONE_DOWN` : `PHONE_UP`
};

const MainTableHead = ({ activeSort, updateSort }) => {
  const handleClick = useCallback(
    (evt) => {
      updateSort(SortName[evt.target.dataset.sort](activeSort));
    },
    [updateSort, activeSort]
  );
    const [sortType, sortDirection] = activeSort.split("_");
  return (
    <thead>
      <tr className="table__header table__row">
        {tableHeads.map((head, i) => (
          <th
            key={`head-${i}`}            
            data-sort={head}
            className="table__column-title table__data"
            onClick={handleClick}
          >
            {head}
            {HeadValues[head] === sortType && sortDirection === `UP` && (
              <span data-sort={head} className="sort__arrow-up"></span>
            )}
            {HeadValues[head] === sortType && sortDirection === `DOWN` && (
              <span data-sort={head} className="sort__arrow-down"></span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

MainTableHead.propTypes = {
  activeSort: PropTypes.string.isRequired,
  updateSort: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeSort: state[NameSpace.USERS_DATA].activeSort,
});

const mapDispatchToProps = (dispatch) => ({
  updateSort(sort) {
    dispatch(ActionCreator.updateSort(sort));
  },
});
export {MainTableHead};
export default connect(mapStateToProps, mapDispatchToProps)(MainTableHead);
