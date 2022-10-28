import styled from 'styled-components';

export const MoviesList = styled.ul`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  margin: 60px 0px;
`;

export const MovieImage = styled.img`
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 8px;
`;
