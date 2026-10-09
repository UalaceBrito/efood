import styled from 'styled-components'
import { colors } from '../styles/global'

export const Tag = styled.span`
  display: inline-block;
  background-color: ${colors.accent};
  color: ${colors.peach};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 4px;
`

const Box = styled.div`
  text-align: center;
  padding: 80px 16px;
  font-size: 18px;

  button {
    margin-top: 16px;
    padding: 8px 16px;
    background-color: ${colors.accent};
    color: ${colors.peach};
    font-weight: 700;
  }
`

type Props = { loading?: boolean; message?: string; onRetry?: () => void }

export function Status({ loading, message, onRetry }: Props) {
  return (
    <Box role={loading ? 'status' : 'alert'}>
      <p>{loading ? 'Carregando...' : message}</p>
      {onRetry && <button type="button" onClick={onRetry}>Tentar novamente</button>}
    </Box>
  )
}
