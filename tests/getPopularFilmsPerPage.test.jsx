// apiFilmes.test.js
import * as api from "../src/services/Api";

jest.mock('../src/services/Api', () => ({
  getPopularFilmsPerPage: jest.fn((page) => {
    switch (page) {
      case 1:
        return Promise.resolve({
          results: [
            { id: 1096197, title: 'Desespero Profundo', vote_average: 5.75 },
            { id: 969492, title: 'Zona de Risco', vote_average: 7.007 },
            { id: 1072790, title: 'Todos Menos Você', vote_average: 6.9 },
            { id: 792307, title: 'Pobres Criaturas', vote_average: 8.091 },
            { id: 940551, title: 'Patos!', vote_average: 7.624 },
            { id: 693134, title: 'Duna: Parte Dois', vote_average: 8.51 },
            { id: 949429, title: 'ผจญภัยล่าขุมทรัพย์หมื่นลี้', vote_average: 6.25 },
            { id: 931642, title: 'Nocaute', vote_average: 7.039 },
            { id: 1211483, title: 'Skal - Fight for Survival', vote_average: 5.545 },
            { id: 609681, title: 'As Marvels', vote_average: 6.255 },
            { id: 1139566, title: 'Através da Minha Janela 3: Olhos nos Olhos', vote_average: 6.693 },
            { id: 787699, title: 'Wonka', vote_average: 7.207 },
            { id: 438631, title: 'Duna', vote_average: 7.788 },
            { id: 933131, title: 'Em Ruínas', vote_average: 6.776 },
            { id: 1026436, title: `Miller's Girl`, vote_average: 6.589 },
            { id: 572802, title: 'Aquaman 2: O Reino Perdido', vote_average: 6.862 },
            { id: 980137, title: 'Papá o Mamá', vote_average: 7.355 },
            { id: 1183905, title: 'Porta-malas: Trancada', vote_average: 6.045 },
            { id: 1022796, title: 'Wish: O Poder dos Desejos', vote_average: 6.629 },
            { id: 673593, title: 'Meninas Malvadas', vote_average: 6.405 },
          ]
        });
      case 2:
        return Promise.resolve({
          results: [
            { id: 866398, title: 'Beekeeper: Rede de Vingança', vote_average: 7.407 },
            { id: 1139829, title: 'Orion e o Escuro', vote_average: 6.715 },
            { id: 872585, title: 'Oppenheimer', vote_average: 8.116 },
            { id: 1212073, title: '60 Minutos', vote_average: 6.812 },
            { id: 982940, title: 'Due Justice', vote_average: 6.522 },
            { id: 634492, title: 'Madame Teia	', vote_average: 5.392 },
            { id: 753342, title: 'Napoleão', vote_average: 6.507 },
            { id: 346698, title: 'Barbie', vote_average: 7.11 },
            { id: 988078, title: 'Através da Minha Janela: Além-mar', vote_average: 6.519 },
            { id: 551608, title: 'Ritual de Inverno', vote_average: 5.5 },
            { id: 695721, title: 'Jogos Vorazes: A Cantiga dos Pássaros e das Serpentes', vote_average: 7.188 },
            { id: 508883, title: 'O Menino e a Garça', vote_average: 7.467 },
            { id: 385687, title: 'Velozes & Furiosos 10', vote_average: 7.147 },
            { id: 802219, title: 'Bob Marley: One Love', vote_average: 6.806 },
            { id: 823464, title: 'Godzilla e Kong: O Novo Império', vote_average: 0 },
            { id: 818647, title: 'Através da Minha Janela', vote_average: 7.391 },
            { id: 569094, title: 'Homem-Aranha: Através do Aranhaverso', vote_average: 8.4 },
            { id: 1090874, title: 'Mea Culpa', vote_average: 5.704 },
            { id: 1028703, title: 'The OctoGames', vote_average: 5.808 },
            { id: 667538, title: 'Transformers: O Despertar das Feras', vote_average: 7.354 },
          ]
        });
      default:
        return Promise.resolve({ results: [] });
    }
  }),
}));

describe('Testing the Films API getPopularFilmsPerPage function', () => {
  it('get all films on page 1', async () => {
    const { results } = await api.getPopularFilmsPerPage(1);
    expect(results.length).toBe(20);
    expect(results[0].title).toBe('Desespero Profundo');
    expect(results[16].id).toBe(980137);
    expect(results[4].vote_average).not.toBe(7.623);
    expect(api.getPopularFilmsPerPage).toHaveBeenCalledWith(1);
  });
  
  it('get all films on page 2', async () => {
    const { results } = await api.getPopularFilmsPerPage(2);
    expect(results.length).toBe(20);
    expect(results[0].title).toBe('Beekeeper: Rede de Vingança');
    expect(results[19].id).toBe(667538);
    expect(results[4].vote_average).not.toBe(6.521);
    expect(api.getPopularFilmsPerPage).toHaveBeenCalledWith(2);
  });
})
