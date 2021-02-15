import React from "react";
import PropTypes from "prop-types";

const Table = ({ TableBody, TableHead }) => {
  return <table className="table">{TableHead}{TableBody}</table>;
};

Table.propTypes = {
  TableBody: PropTypes.node.isRequired,
  TableHead: PropTypes.node.isRequired,
};

export default Table;
