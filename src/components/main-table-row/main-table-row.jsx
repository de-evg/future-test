import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import TableData from '../table-data.jsx/table-data';
import Details from '../details/details';
import {showingStatus} from '../../const';

const MainTableRow = ({activeRow, setActiveRow, user: {id, firstName, lastName, email, phone, address, description}}) => {
  const cellsData = [id, firstName, lastName, email, phone];
  const details = {address, description, firstName, lastName};

  const handleRowClick = useCallback(() => {
    if (activeRow === id) {
      setActiveRow(showingStatus.UNSET);
    } else {
      setActiveRow(id);
    }    
  }, [id, activeRow, setActiveRow]);

  const activeClass = activeRow === id ? "table__row--active" : ""
  return (
    <>
      <tr data-active={activeRow === id} className={`table__row ${activeClass}`} onClick={handleRowClick}>
        {
          cellsData.map((cellData, i) => <TableData key={`cell-${i}`} cellData={cellData} />)
        }
      </tr>
      {
        activeRow === id &&
        <tr className="table__details-row">
          <td colspan="5"><Details details={details} /></td>
        </tr>
      }
    </>
  );
};

MainTableRow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  address: PropTypes.shape({
    streetAddress: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string
  }),
  description: PropTypes.string
};

export default MainTableRow;
