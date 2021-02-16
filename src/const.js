export const showingStatus = {
  UNSET: `UNSET`,
  SHOW: `SHOW`,
  HIDE: `HIDE`,
};

export const STEP = 50;

export const DEFAULT_SORT = `ID_UP`;

export const SortType = {
  ID_UP: `ID_UP`,
  ID_DOWN: `ID_DOWN`,
  FIRSTNAME_UP: `FIRSTNAME_UP`,
  FIRSTNAME_DOWN: `FIRSTNAME_DOWN`,
  LASTNAME_UP: `LASTNAME_UP`,
  LASTNAME_DOWN: `LASTNAME_DOWN`,
  EMAIL_UP: `EMAIL_UP`,
  EMAIL_DOWN: `EMAIL_DOWN`,
  PHONE_UP: `PHONE_UP`,
  PHONE_DOWN: `PHONE_DOWN`,
};

export const APIRoute = {
  SMALL:
    "/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}",
  FULL:
    "/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}",
};
