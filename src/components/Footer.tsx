import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container, Logo } from './ui'
import { colors, breakpoints } from '../styles/global'

const Wrapper = styled.footer`
  background-color: ${colors.peach};
  padding: 40px 0;
  margin-top: 120px;
  text-align: center;
  color: ${colors.accent};

  ${Logo} {
    display: inline-block;
    margin-bottom: 32px;
  }

  p {
    font-size: 10px;
    max-width: 480px;
    margin: 0 auto;
    line-height: 12px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 64px;
  }
`

const Social = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${colors.accent};
    color: ${colors.peach};
    font-size: 10px;
    font-weight: 700;
  }
`

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Link to="/" aria-label="efood, página inicial">
          <Logo>efood</Logo>
        </Link>
        <Social aria-label="Redes sociais">
          <li><a href="https://www.instagram.com/" aria-label="Instagram">ig</a></li>
          <li><a href="https://www.facebook.com/" aria-label="Facebook">fb</a></li>
          <li><a href="https://x.com/" aria-label="X">x</a></li>
        </Social>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade
          dos produtos é toda do estabelecimento contratado.
        </p>
      </Container>
    </Wrapper>
  )
}
