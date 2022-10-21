import toast from 'react-hot-toast';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieReviews } from '../../services/api';

import {
  ReviewsList,
  ReviewsItems,
  ReviewsAuthor,
  ReviewsAuthorName,
} from './Reviews.styled';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        const { results } = await getMovieReviews(id);
        setReviews(results);
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

    fetchMovieReview();
  }, [id]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      {reviews && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <ReviewsItems key={id}>
                <ReviewsAuthor>
                  Author: <ReviewsAuthorName>{author}</ReviewsAuthorName>
                </ReviewsAuthor>
                <p>{content}</p>
              </ReviewsItems>
            );
          })}
        </ReviewsList>
      )}

      {reviews?.length === 0 && (
        <h2>We don't have any rewievs for this movie.</h2>
      )}
    </div>
  );
}
