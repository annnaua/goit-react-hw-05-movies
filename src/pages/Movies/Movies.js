import toast from 'react-hot-toast';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from '../../services/api';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesByQuery } from 'components/MoviesByQuery/MoviesByQuery';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams({});

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchMovieByQuery = async () => {
      try {
        const { results } = await getMovieByQuery(query);
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

    fetchMovieByQuery();
  }, [query]);

  return (
    <div>
      <SearchForm />
      <MoviesByQuery movies={movies} />
    </div>
  );
}
