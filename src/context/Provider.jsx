import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [filmsPerPage, setFilmsPerPage] = useState([]);
  const [filmDetail, setFilmDetail] = useState([]);

  const Object = {
    filmsPerPage,
    setFilmsPerPage,
    filmDetail,
    setFilmDetail
  };

  return (
    <Context.Provider value={ Object }>
      { children }
    </Context.Provider>
  );
}

export default Provider;