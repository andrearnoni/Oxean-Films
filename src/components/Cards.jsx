import React from 'react';
import { Link } from 'react-router-dom';
import { imageURL } from '../helpers/GeneralHelpers';
import '../styles/Cards.css';

function Cards({ filmsPerPage }) {
  return (
    <>
      <div className="film-list">
        {filmsPerPage && filmsPerPage.map((film, index) => (
          <Link key={ index } to={ `/film/${film.id}` }>
            <div className="film-card">
              <img className="film-card-image" alt="Film Cover" src={ imageURL + film.poster_path } />
              <div className="film-card-body">
                <h4 className="film-card-title">{ film.title }</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Cards;