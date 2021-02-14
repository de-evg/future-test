import React from 'react';
import ShowAddFormBtn from '../show-add-form-btn/show-add-form-btn';
import ShowAllBtn from '../show-all-btn/show-all-btn';
import ShowFavoriteBtn from '../show-favorite-btn/show-favorite-btn';
import ShowSearchFormBtn from '../show-search-form-btn/show-search-form-btn';

const MainMenu = () => {
  return (
    <nav className="main-menu">
      <ShowAllBtn />
      <ShowFavoriteBtn />
      <ShowSearchFormBtn />
      <ShowAddFormBtn />
    </nav>
  );
};

export default MainMenu;
