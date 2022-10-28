import toast from 'react-hot-toast';

import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieDetails } from '../../services/api';
import notFound from '../../placeholders/notFoundPoster.png';

import {
  MovieContainer,
  MovieInfo,
  MovieInfoItem,
  MovieTitle,
  MovieInfoTitle,
  MovieOverview,
  MovieOverviewTitle,
  LinkContainer,
  Link,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const posterUrl = `https://image.tmdb.org/t/p/w500`;

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movie = await getMovieDetails(id);
        setMovie(movie);
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

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return;
  }

  const { poster_path, title, release_date, vote_average, genres, overview } =
    movie;

  return (
    <div>
      <NavLink to={backLinkHref}>Back to movies</NavLink>

      <MovieContainer>
        <img
          style={{ borderRadius: 4, width: 512 }}
          src={poster_path ? posterUrl + poster_path : notFound}
          alt={title}
        />

        <div>
          <MovieTitle>
            {title} ({release_date.slice(0, 4)})
          </MovieTitle>

          <MovieInfo>
            <MovieInfoItem>
              <MovieInfoTitle>User Score:</MovieInfoTitle>
              <span>{vote_average}</span>
            </MovieInfoItem>

            <MovieInfoItem>
              <MovieInfoTitle>Genres: </MovieInfoTitle>
              {genres.map(({ id, name }) => (
                <span key={id}>{name}</span>
              ))}
            </MovieInfoItem>
          </MovieInfo>

          <MovieOverview>
            <MovieOverviewTitle>Overview</MovieOverviewTitle>
            <span>{overview}</span>
          </MovieOverview>
        </div>
      </MovieContainer>

      <LinkContainer>
        <li>
          <Link to="cast" state={location.state?.from ? location.state : '/'}>
            Casts
          </Link>
        </li>

        <li>
          <Link
            to="reviews"
            state={location.state?.from ? location.state : '/'}
          >
            Reviews
          </Link>
        </li>
      </LinkContainer>

      <Outlet />
    </div>
  );
}
