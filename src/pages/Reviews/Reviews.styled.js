import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ReviewsItems = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  padding: 32px;
  border-radius: 4px;
  background-color: #27272c;
`;

export const ReviewsAuthor = styled.h2`
  font-size: 20px;
`;

export const ReviewsAuthorName = styled.span`
  color: #e11d48;
`;
