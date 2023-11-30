import styled from 'styled-components';

export const Form = styled.form`
  margin-left: 40px;
  padding: 10px;
  display: flex;
`;

export const Input = styled.input`
  height: 40px;
  width: 240px;
  font-size: 18px;
  font-weight: 500;
  padding-left: 10px;
  border: 2px solid #0a2342;
  border-radius: 8px;
  background-color: #0e304f;
  color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #68a9ff;
  }
`;

export const Button = styled.button`
  width: 84px;
  
  background-color: #11ad91;
  border: 2px solid #ffffff;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1c405f;
  }
`;
