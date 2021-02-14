import React, {useCallback} from 'react';

const ShowFavoriteBtn = () => {
  const handleClick = useCallback(() => {}, []);

  return (
    <button className="main-menu__button button" onClick={handleClick}>Показать избранное</button>
  );
};

export default ShowFavoriteBtn;