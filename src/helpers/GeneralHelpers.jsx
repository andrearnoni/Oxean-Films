export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_TMDB_TOKEN
  }
};

export const imageURL = 'https://image.tmdb.org/t/p/w500';