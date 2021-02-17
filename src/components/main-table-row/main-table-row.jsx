import React, { useCallback } from "react";
import PropTypes from "prop-types";
import TableData from "../table-data/table-data";
import Details from "../details/details";
import { showingStatus } from "../../const";

const MainTableRow = ({
  activeRow,
  setActiveRow,
  rowID,
  user: { id, firstName, lastName, email, phone, address, description },
}) => {
  const cellsData = [id, firstName, lastName, email, phone];
  const details = { address, description, firstName, lastName };
  if (id === undefined) {
    debugger;
  }
  const handleRowClick = useCallback(() => {
    if (activeRow === rowID) {
      setActiveRow(showingStatus.UNSET);
    } else {
      setActiveRow(rowID);
    }
  }, [rowID, activeRow, setActiveRow]);

  const activeClass = activeRow === rowID ? "table__row--active" : "";
  const resetColor = activeRow ? { backgroudColor: "#fff" } : "";
  return (
    <>
      <tr
        style={resetColor}
        data-active={activeRow === rowID}
        className={`table__row ${activeClass}`}
        onClick={handleRowClick}
      >
        {cellsData.map((cellData, i) => (
          <TableData key={`cell-${i}`} cellData={cellData} />
        ))}
      </tr>
      {activeRow === rowID && (
        <tr className="table__details-row">
          <td colSpan="5">
            <Details details={details} />
          </td>
        </tr>
      )}
    </>
  );
};

MainTableRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    address: PropTypes.shape({
      streetAddress: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
    }),
    description: PropTypes.string,
  }),
  rowID: PropTypes.string.isRequired,
};

export default MainTableRow;
