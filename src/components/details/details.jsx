import React from 'react';
import PropTypes from 'prop-types';

const Details = ({details: {address, description, firstName, lastName}}) => {
  return (
    <table className="details">
      <tbody>
        <tr className="details__row">
          <th colSpan="1" className="details__head">
            Выбран пользователь
          </th>
          <td colSpan="3" className="details__data">
            {`${firstName} ${lastName}`}
          </td>
        </tr>
        <tr className="details__row">
          <th colSpan="1" className="details__head">
            Описание
          </th>
          <td colSpan="3" className="details__data">
            <textarea className="details__description" defaultValue={description} disabled></textarea>
          </td>
        </tr>
        <tr className="details__row">
          <th colSpan="1" className="details__head">
            Адрес проживания
          </th>
          <td colSpan="3" className="details__data">
            {address.streetAddress}
          </td>
        </tr>
        <tr className="details__row">
          <th colSpan="1" className="details__head">
            Город
          </th>
          <td colSpan="3" className="details__data">
            {address.city}
          </td>
        </tr>
        <tr className="details__row">
          <th colSpan="1" className="details__head">
            Провинция/штат
          </th>
          <td colSpan="3" className="details__data">
            {address.state}
          </td>
        </tr>
        <tr className="details__row">
          <th colSpan="1" className="details__head">
            Индекс
          </th>
          <td colSpan="3" className="details__data">
            {address.zip}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

Details.propTypes = {
  details: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.shape({
      streetAddress: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string
    }).isRequired,
    description: PropTypes.string.isRequired
  })
};

export default Details;
