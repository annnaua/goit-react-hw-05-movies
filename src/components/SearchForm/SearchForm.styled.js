import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 16px;
`;

export const SearchField = styled.input`
  display: block;
  width: 100%;

  padding: 16px;
  border: 0;
  outline: 0;

  background-color: #27272c;
  border-radius: 4px;
`;

export const SearchButton = styled.button`
  padding: 16px 48px;
  border-radius: 4px;
  background-color: #e11d48;

  border: 0;
  outline: 0;

  font-size: 16px;
  font-weight: 600;
  color: #e4e4e7;

  :hover {
    color: #fafafa;
  }

  cursor: pointer;
`;
