import toast, { Toaster } from 'react-hot-toast';

import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getTrendingMovies } from '../../services/api';

import { MoviesList, MovieImage } from './Home.styled';
import notFound from '../../placeholders/notFoundPoster.png';

export default function Home() {
  const posterUrl = `https://image.tmdb.org/t/p/w500`;

  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        toast('Sorry, something went wrong!', {
          icon: '💭',
          style: {
            borderRadius: '4px',
            background: '#e11d48',
            color: '#fafafafa',
          },
        });
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <section>
      <h1>Trending today</h1>

      <MoviesList>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <NavLink to={`movies/${id}`} state={{ from: location }}>
              <MovieImage
                src={poster_path ? posterUrl + poster_path : notFound}
                alt={title}
              />
              <h3>{title}</h3>
            </NavLink>
          </li>
        ))}
      </MoviesList>

      <Toaster position="top-right" />
    </section>
  );
}
