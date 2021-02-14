import React from "react";
import PropTypes from 'prop-types';

const tableHeads = [`ID`, `First Name`, `Last Name`, `Email`, `Phone`];

const Table = ({tableBody}) => {
  return (
    <table className="table">
      <thead>
        <tr className="table__header table__row">
          {tableHeads.map((head, i) => (
            <th key={`head-${i}`} className="table__column-title table__data">{head}</th>
          ))}
        </tr>
      </thead>
      {tableBody}

    </table>
  );
};

Table.propTypes = {
  tableBody: PropTypes.node.isRequired
};

export default Table;
