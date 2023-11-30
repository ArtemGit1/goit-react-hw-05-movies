import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Layout, ListNav, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <div>
      <Header>
        <nav>
          <ListNav>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ListNav>
        </nav>
      </Header>
      <Layout>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Layout>
    </div>
  );
};