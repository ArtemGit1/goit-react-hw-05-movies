import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  width: 120px;
  height: 36px;
  margin: 16px 0;
  background-color: #ff6f61;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const Layout = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #2a2a72;
  border-radius: 15px;
  margin: 20px;
  background-color: #eaeaea;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #2a2a72;
`;

export const Text = styled.p`
  width: 80%;
  font-size: 16px;
  margin-bottom: 16px;
  text-align: justify;
  color: #333;
`;

export const SubTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 12px;
  color: #ff6f61;
`;

export const SubWrapper = styled.div`
  padding: 16px 40px;
  border-top: 2px solid #2a2a72;
  margin-top: 20px;
`;

export const Information = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #4CAF50;
`;

export const StyledLink = styled(Link)`
  margin-top: 20px;
  color: #2a2a72;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

