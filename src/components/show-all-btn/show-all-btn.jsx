import React, {useCallback} from 'react';

const ShowAllBtn = () => {
  const handleClick = useCallback(() => {}, []);

  return (
    <button className="main-menu__button button" onClick={handleClick}>Показать все</button>
  );
};

export default ShowAllBtn;
