import styled from 'styled-components'
import HomeHeader from '../components/HomeHeader'
import Footer from '../components/Footer'
import RestaurantCard from '../components/RestaurantCard'
import { Status } from '../components/Status'
import { Container } from '../components/ui'
import { breakpoints } from '../styles/global'
import { useRestaurants } from '../useRestaurants'

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px;
  padding-top: 80px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-top: 40px;
  }
`

export default function Home() {
  const { state, retry } = useRestaurants()

  return (
    <>
      <HomeHeader />
      <main>
        <Container>
          {state.status === 'loading' && <Status loading />}
          {state.status === 'error' && <Status message={state.message} onRetry={retry} />}
          {state.status === 'ready' && (
            <Grid>
              {state.restaurants.map((restaurant) => (
                <li key={restaurant.id}>
                  <RestaurantCard restaurant={restaurant} />
                </li>
              ))}
            </Grid>
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}
