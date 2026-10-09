import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container, Logo } from './ui'
import { colors, breakpoints } from '../styles/global'
import { capitalize, type Restaurant } from '../api'

const Bar = styled.header`
  background-color: ${colors.peach};
  background-image: radial-gradient(${colors.accent}22 2px, transparent 2px);
  background-size: 28px 28px;
  height: 186px;

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  a,
  span.cart {
    flex: 1;
    font-size: 18px;
    font-weight: 900;
  }

  span.cart {
    text-align: right;
  }

  ${Logo} {
    flex: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 120px;
    a,
    span.cart {
      font-size: 14px;
    }
  }
`

const Banner = styled.div<{ $image: string }>`
  position: relative;
  height: 280px;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  color: ${colors.white};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.56);
  }

  ${Container} {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 25px;
    padding-bottom: 32px;
  }

  span {
    font-size: 32px;
    font-weight: 100;
  }

  h2 {
    font-size: 32px;
    font-weight: 900;
  }
`

type Props = { restaurant?: Restaurant }

export default function ProfileHeader({ restaurant }: Props) {
  return (
    <>
      <Bar>
        <Container>
          <Link to="/">Restaurantes</Link>
          <Link to="/" aria-label="efood, página inicial">
            <Logo>efood</Logo>
          </Link>
          <span className="cart">0 produto(s) no carrinho</span>
        </Container>
      </Bar>
      {restaurant && (
        <Banner $image={restaurant.capa}>
          <Container>
            <span>{capitalize(restaurant.tipo)}</span>
            <h2>{restaurant.titulo}</h2>
          </Container>
        </Banner>
      )}
    </>
  )
}
