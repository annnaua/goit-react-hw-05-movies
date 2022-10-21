import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(212px, 1fr));
`;

export const CastItems = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CastImage = styled.img`
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 8px;
`;
