import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurantes/:id" element={<Restaurant />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
