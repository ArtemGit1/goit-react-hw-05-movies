import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyled';
import { Navigation } from './Navigation/Navigation';

const HomePage = lazy(() => import('pages/Home'));
const MoviesPage = lazy(() => import('pages/Movies'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const NotFoundPages = lazy(() => import('pages/NotFoundPages'));
const MovieCast = lazy(() => import('./Cast/Cast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPages />} />
      </Routes>

      <GlobalStyle />
    </>
  );
};
