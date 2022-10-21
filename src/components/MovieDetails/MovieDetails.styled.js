import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  gap: 48px;

  margin: 32px 0px;
`;

export const MovieTitle = styled.h1`
  font-size: 60px;
  font-weight: 800;
  color: #fafafafa;

  margin-bottom: 48px;
`;

export const MovieInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MovieInfoItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const MovieInfoTitle = styled.h2`
  font-size: 20px;
`;

export const MovieOverview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 48px;
`;

export const MovieOverviewTitle = styled.h2`
  font-size: 20px;
  text-transform: uppercase;
  color: #e11d48;
`;

export const LinkContainer = styled.ul`
  display: flex;
  gap: 16px;

  margin-bottom: 32px;
`;

export const Link = styled(NavLink)`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #27272c;

  font-weight: 500;
  color: #e4e4e7;

  &.active {
    color: #fafafa;
    background-color: #e11d48;
  }
`;
