import { options } from "../helpers/GeneralHelpers";

export async function getPopularFilmsPerPage(page) {
  const url = `https://api.themoviedb.org/3/movie/popular?language=pt-br&page=${page}`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
  }
}

export async function getFilmDetails(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-br`;  

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (e) {
      console.error(e);
    }  
}  