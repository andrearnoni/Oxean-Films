import { useEffect, useContext } from 'react';
import GridComponent from '../components/GridComponent';
import { getPopularFilmsPerPage } from '../services/Api';
import { Context } from '../context/Provider';
import Cards from '../components/Cards';
import '../styles/Home.css';

function Home() {
  const { 
    filmsPerPage,
    setFilmsPerPage } = useContext(Context);
  
  useEffect(() => {
    const request = async () => {
      const { results } = await getPopularFilmsPerPage(1);
      setFilmsPerPage(results);
    };
    request();
  }, []);

  return (
    <div>
      <h1 className="home-title">Oxean Films</h1>
      <Cards filmsPerPage={ filmsPerPage } />
      <GridComponent filmsPerPage={ filmsPerPage } />
    </div>
  )
}

export default Home;