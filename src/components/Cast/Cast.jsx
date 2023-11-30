import { fetchGetMovieCreditsById } from 'api';
import { ActorCard } from 'components/ActorCard/ActorCard';
import { Errors } from 'components/Errors/Errors';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const CastList = styled.ul`
  margin-top: 16px;
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 60px;
  gap: 24px;
`;

const CastItem = styled.li`
  width: 160px;
`;

export default function Cast() {
  const [isLoading, setIsLoading] = useState(false);
  const [actors, setActors] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const response = await fetchGetMovieCreditsById(params.movieId);
        setActors(response.cast);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [params.movieId]);

  return (
    <>
      {actors.length > 0 ? (
        <CastList>
          {actors.map(actor => (
            <CastItem key={actor.id}>
              <ActorCard actor={actor} />
            </CastItem>
          ))}
        </CastList>
      ) : (
        !isLoading && <Errors>We don't have any casts for this movie.</Errors>
      )}
      {isLoading && <Loader />}
    </>
  );
}
