import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin-left: 30px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  width: 200px;
`;

export const Title = styled.p`
  font-size: 18px;
  margin-top: 12px;
  color: #fff; /* White text color */
  font-weight: 700;
  text-align: center;
  background-color: #2c3e50; /* Dark background color */
  padding: 8px;
  border-radius: 8px;
  border: 2px solid #3498db; /* Light border color */
`;

export const Img = styled.img`
  height: 300px;
  width: 100%;
  border-radius: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #111;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;