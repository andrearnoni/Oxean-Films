// apiFilmes.test.js
import * as api from "../src/services/Api";

jest.mock('../src/services/Api', () => ({
  getFilmDetails: jest.fn((filmId) => {
    if (filmId === 866398) {
      return Promise.resolve({
        id: 866398, title: 'Beekeeper: Rede de Vingança', imdb_id: 'tt15314262', budget: 35000000, vote_average: 7.406
      });
    } else {
      // Retornar um valor diferente ou talvez um erro ou objeto vazio para simular "filme não encontrado"
      return Promise.resolve(null);
    }
  }),
}));

describe('Testing the Films API getFilmDetails function', () => {
  it('search details of a specific movie by ID', async () => {
    const filmId = 866398;
    const film = await api.getFilmDetails(filmId);
    const expectedFilm = {
      id: 866398, title: 'Beekeeper: Rede de Vingança', imdb_id: 'tt15314262', budget: 35000000, vote_average: 7.406
    };

    expect(film).toEqual(expectedFilm);
    expect(film.imdb_id).toBe('tt15314262')
    expect(api.getFilmDetails).toHaveBeenCalledWith(filmId);
  });
})
