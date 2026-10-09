import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container, Logo } from './ui'
import { colors, breakpoints } from '../styles/global'

const Hero = styled.header`
  background-color: ${colors.peach};
  background-image: radial-gradient(${colors.accent}22 2px, transparent 2px);
  background-size: 28px 28px;
  height: 384px;
  padding-top: 40px;
  text-align: center;

  h1 {
    max-width: 540px;
    margin: 138px auto 0;
    font-size: 36px;
    font-weight: 900;
    line-height: 42px;
    color: ${colors.accent};
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
    padding-bottom: 40px;

    h1 {
      margin-top: 48px;
      font-size: 28px;
      line-height: 34px;
    }
  }
`

export default function HomeHeader() {
  return (
    <Hero>
      <Container>
        <Link to="/" aria-label="efood, página inicial">
          <Logo>efood</Logo>
        </Link>
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
      </Container>
    </Hero>
  )
}
