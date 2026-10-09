import styled from 'styled-components'
import { colors, breakpoints } from '../styles/global'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 16px;
  }
`

export const Button = styled.button`
  background-color: ${colors.accent};
  color: ${colors.peach};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
`

export const Logo = styled.span`
  font-size: 40px;
  font-weight: 900;
  letter-spacing: -2px;
  color: ${colors.accent};

  &::after {
    content: '.';
  }
`
