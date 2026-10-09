import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from './ui'
import { Tag } from './Status'
import { colors } from '../styles/global'
import { capitalize, type Restaurant } from '../api'

const Card = styled.article`
  position: relative;
  background-color: ${colors.white};
  border: 1px solid ${colors.accent};
  color: ${colors.accent};

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

const Body = styled.div`
  padding: 8px;

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.accent};
    margin: 16px 0;
  }

  ${Button} {
    display: inline-block;
    padding: 4px 6px;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;

  span {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`

const LinkButton = styled(Button).attrs({ as: Link })``

type Props = { restaurant: Restaurant }

export default function RestaurantCard({ restaurant }: Props) {
  const summary = restaurant.descricao.length > 250
    ? `${restaurant.descricao.slice(0, 247).trimEnd()}...`
    : restaurant.descricao

  return (
    <Card>
      <img src={restaurant.capa} alt={restaurant.titulo} loading="lazy" />
      <Tags>
        {restaurant.destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{capitalize(restaurant.tipo)}</Tag>
      </Tags>
      <Body>
        <Title>
          <h3>{restaurant.titulo}</h3>
          <span>{restaurant.avaliacao} <span aria-hidden="true">★</span></span>
        </Title>
        <p>{summary}</p>
        <LinkButton to={`/restaurantes/${restaurant.id}`}>Saiba mais</LinkButton>
      </Body>
    </Card>
  )
}
