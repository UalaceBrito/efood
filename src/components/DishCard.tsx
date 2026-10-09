import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors, breakpoints } from '../styles/global'
import { formatPrice, type Dish } from '../api'

const Card = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${colors.accent};
  color: ${colors.peach};
  padding: 8px;

  img {
    display: block;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
    flex: 1;
  }
`

const Action = styled.button`
  background-color: ${colors.peach};
  color: ${colors.accent};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  width: 100%;
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 16px;
`

const Dialog = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  width: 100%;
  max-width: 1024px;
  max-height: 100%;
  overflow-y: auto;
  background-color: ${colors.accent};
  color: ${colors.white};
  padding: 32px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    flex: none;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  ${Action} {
    width: auto;
    padding: 4px 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`

const Close = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  color: ${colors.white};
  font-size: 20px;
  line-height: 1;
`

type Props = { dish: Dish }

export default function DishCard({ dish }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const summary = dish.descricao.length > 160 ? `${dish.descricao.slice(0, 157).trimEnd()}...` : dish.descricao

  return (
    <>
      <Card>
        <img src={dish.foto} alt={dish.nome} loading="lazy" />
        <h3>{dish.nome}</h3>
        <p>{summary}</p>
        <Action type="button" onClick={() => setOpen(true)}>Mais detalhes</Action>
      </Card>
      {open && (
        <Overlay onClick={() => setOpen(false)}>
          <Dialog role="dialog" aria-modal="true" aria-label={dish.nome} onClick={(event) => event.stopPropagation()}>
            <Close type="button" aria-label="Fechar" onClick={() => setOpen(false)}>✕</Close>
            <img src={dish.foto} alt={dish.nome} />
            <div>
              <h3>{dish.nome}</h3>
              <p>{dish.descricao}</p>
              <p>Serve: {dish.porcao}</p>
              <Action type="button">Adicionar ao carrinho - {formatPrice(dish.preco)}</Action>
            </div>
          </Dialog>
        </Overlay>
      )}
    </>
  )
}
