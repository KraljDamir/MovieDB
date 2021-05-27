import React, { useMemo, useContext } from 'react';

const DatabaseContext = React.createContext();

export const DatabaseProvider = ({ children }) => {
  const API_KEY = '4f0f5998660e83f5367c029bc3d7a701';
  const IMG_API = 'https://image.tmdb.org/t/p/w500';
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';

  const value = useMemo(() => ({ API_KEY, IMG_API, BASE_URL }), []);

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => useContext(DatabaseContext);
