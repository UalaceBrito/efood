import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import ProfileHeader from '../components/ProfileHeader'
import Footer from '../components/Footer'
import DishCard from '../components/DishCard'
import { Status } from '../components/Status'
import { Container } from '../components/ui'
import { breakpoints } from '../styles/global'
import { useRestaurants } from '../useRestaurants'

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding-top: 56px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export default function Restaurant() {
  const { id } = useParams()
  const { state, retry } = useRestaurants()
  const restaurant = state.status === 'ready'
    ? state.restaurants.find((item) => String(item.id) === id)
    : undefined

  return (
    <>
      <ProfileHeader restaurant={restaurant} />
      <main>
        <Container>
          {state.status === 'loading' && <Status loading />}
          {state.status === 'error' && <Status message={state.message} onRetry={retry} />}
          {state.status === 'ready' && !restaurant && (
            <Status message="Restaurante não encontrado." />
          )}
          {restaurant && (
            <Grid>
              {restaurant.cardapio.map((dish) => (
                <li key={dish.id}>
                  <DishCard dish={dish} />
                </li>
              ))}
            </Grid>
          )}
          {state.status === 'ready' && !restaurant && <Link to="/">Voltar para a home</Link>}
        </Container>
      </main>
      <Footer />
    </>
  )
}
