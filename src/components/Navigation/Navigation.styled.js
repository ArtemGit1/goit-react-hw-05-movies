import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div``;

export const Header = styled.header`
  height: 60px;
  border-bottom: 1px solid #1a1a1a;
  padding-left: 60px;
  padding-top: 16px;
  margin-bottom: 16px;
  background-color: #192a3e;
  border-radius: 15px;
  width: 99%;
`;

export const ListNav = styled.ul`
  display: flex;
  gap: 36px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  transition: color 0.3s ease;

  &.active {
    color: #11ad91;
  }

  &:hover {
    color: #f0f0f0;
  }
`;

