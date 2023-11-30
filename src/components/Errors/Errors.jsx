import styled from 'styled-components';

const StyledErrors = styled.b`
  margin-left: 64px;
  font-size: 24px;
  color: red;
`;

export const Errors = ({ children }) => {
  return <StyledErrors>{children}</StyledErrors>;
};