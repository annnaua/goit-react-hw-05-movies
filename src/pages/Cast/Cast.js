import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import toast from 'react-hot-toast';

import { getMovieCredits } from '../../services/api';

import { CastList, CastItems, CastImage } from './Cast.styled';
import notFound from '../../placeholders/notFoundPoster.png';

export default function Cast() {
  const posterUrl = `https://image.tmdb.org/t/p/w500`;

  const { id } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const { cast } = await getMovieCredits(id);
        setCasts(cast);
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

    fetchMovieCredits();
  }, [id]);

  if (!casts) {
    return;
  }

  return (
    <div>
      {casts && (
        <CastList>
          {casts.map(({ id, name, character, profile_path }) => {
            return (
              <CastItems key={id}>
                <CastImage
                  src={profile_path ? posterUrl + profile_path : notFound}
                  alt={name}
                />

                {name ? <p>{name}</p> : <p>Anonimous</p>}
                {character ? (
                  <p>Character: {character}</p>
                ) : (
                  <p>Character: Anonimous</p>
                )}
              </CastItems>
            );
          })}
        </CastList>
      )}

      {casts?.length === 0 && <h2>We don't have any casts for this movie.</h2>}
    </div>
  );
}
