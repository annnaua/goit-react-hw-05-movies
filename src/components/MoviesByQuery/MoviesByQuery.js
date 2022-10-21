import PropTypes from 'prop-types';

import { NavLink, useLocation } from 'react-router-dom';

import { MoviesList, MovieImage } from './MoviesByQuery.styled';
import notFound from '../../placeholders/notFoundPoster.png';

export const MoviesByQuery = ({ movies }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500`;

  const location = useLocation();

  return (
    <section>
      <MoviesList>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <MovieImage
                src={poster_path ? posterUrl + poster_path : notFound}
                alt={title}
              />
              <h3>{title}</h3>
            </NavLink>
          </li>
        ))}
      </MoviesList>
    </section>
  );
};

MoviesByQuery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
