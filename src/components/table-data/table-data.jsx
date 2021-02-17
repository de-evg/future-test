import React from 'react';
import PropTypes from 'prop-types';

const TableData = ({cellData}) => {
  return (
    <td className="table__data">{cellData}</td>
  );
};

TableData.propTypes = {
  cellData: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default TableData;
