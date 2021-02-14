import React from 'react';
import AddInputId from '../add-input-id/add-input-id';
import AddInputFirstname from '../add-input-firstname/add-input-firstname';
import AddInputLastname from '../add-input-lastname/add-input-lastname';
import AddInputEmail from '../add-input-email/add-input-email';
import AddInputPhone from '../add-input-phone/add-input-phone';

const AddRow = () => {
  return (
    <tr className="table__row">
      <td className="table__data"><AddInputId /></td>
      <td className="table__data"><AddInputFirstname /></td>
      <td className="table__data"><AddInputLastname /> </td>
      <td className="table__data"><AddInputEmail /> </td>
      <td className="table__data"><AddInputPhone /> </td>
    </tr>

  );
};

export default AddRow;
