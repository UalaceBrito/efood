import { useEffect, useState } from 'react'
import { fetchRestaurants, type Restaurant } from './api'

type State =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'ready'; restaurants: Restaurant[] }

export function useRestaurants() {
  const [attempt, setAttempt] = useState(0)
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    const controller = new AbortController()
    fetchRestaurants(controller.signal)
      .then((restaurants) => setState({ status: 'ready', restaurants }))
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        setState({ status: 'error', message: error instanceof Error ? error.message : 'Erro inesperado' })
      })
    return () => controller.abort()
  }, [attempt])

  const retry = () => {
    setState({ status: 'loading' })
    setAttempt((value) => value + 1)
  }

  return { state, retry }
}
