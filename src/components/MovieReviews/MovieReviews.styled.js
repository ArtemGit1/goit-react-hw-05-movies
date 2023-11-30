import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 40px;
`;

export const Item = styled.li`
  width: 80%;
  margin-bottom: 30px;
  background-color: #292d3e; /* Dark purple background */
  border-radius: 15px;
  padding: 20px;
  color: #fff; /* White text color */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); /* Heavy shadow effect */
`;

export const Author = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;
  color: #61dafb; /* Bright blue text color */
`;

export const Content = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
  line-height: 1.6;
`;

export const Date = styled.span`
  font-size: 16px;
  color: #888; /* Light grey text color */
`;

export const EmptyMessage = styled.p`
  text-align: center;
  margin: 60px 0;
  font-size: 22px;
  color: #61dafb; /* Bright blue text color */
`;
