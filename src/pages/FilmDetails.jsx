import { useEffect, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFilmDetails } from '../services/Api';
import { Context } from '../context/Provider';
import { imageURL } from '../helpers/GeneralHelpers';
import Loading from '../components/Loading';
import '../styles/FilmDetails.css';

function FilmDetails() {
  const { 
    filmDetail,
    setFilmDetail } = useContext(Context);
  const [loading, setLoading] = useState(null);  
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const request = async () => {
      const result = await getFilmDetails(id);
      setFilmDetail(result);
      setLoading(false);
    };
    request();
  }, []);

  if (loading) return <Loading />;
  return (
    <div>
      <div className="details-sub-container">
        <img className="details-img" alt="Film Cover" src={ imageURL + filmDetail.backdrop_path } />
        <p>{ `Título: ${filmDetail.title}` }</p>
        <p>{ `Sinopse: ${filmDetail.overview}` }</p>
        <p>{ `Genero(s): ${filmDetail.genres && filmDetail.genres.map((item) => item.name)}` }</p>
        <p>{ `Nota: ${filmDetail.vote_average}` }</p>
        <div>
          <Link to="/">
            <button className="details-btn">VOLTAR</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilmDetails;
