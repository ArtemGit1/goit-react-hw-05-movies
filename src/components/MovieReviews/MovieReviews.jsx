import { fetchGetMovieReviewsById } from 'api';
import { Errors } from 'components/Errors/Errors';
import { Loader } from 'components/Loader/Loader';
import { Reviews } from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item, List } from './MovieReviews.styled';

export default function MovieReviews() {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const response = await fetchGetMovieReviewsById(params.movieId);
        setReviews(response.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [params.movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(review => (
            <Item key={review.id}>
              <Reviews review={review} />
            </Item>
          ))}
        </List>
      ) : (
        !isLoading && <Errors>We don`t have any reviews for this movie.</Errors>
      )}
      {isLoading && <Loader />}
    </>
  );
}
