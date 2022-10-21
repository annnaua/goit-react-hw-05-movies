import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 32px 0;

  > nav {
    display: flex;
    gap: 16px;
  }
`;

export const Link = styled(NavLink)`
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
