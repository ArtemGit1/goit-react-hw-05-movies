import { Img, Item, List, StyledLink, Title } from './MoviesList.styled';

export const ListMovies = ({ movies, location }) => {
  return (
    <>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <Img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
                }
                alt=""
                width={160}
              />
              <Title>{movie.title}</Title>
            </StyledLink>
          </Item>
        ))}
      </List>
    </>
  );
};
