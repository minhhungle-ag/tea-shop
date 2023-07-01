import { Route, Routes } from 'react-router-dom'
import { ShopPage } from './pages/ShopPage'
import { ShopDetail } from './pages/ShopDetail'

export default function Shops() {
  return (
    <Routes>
      <Route index element={<ShopPage />} />
      <Route path=":id" element={<ShopDetail />} />
    </Routes>
  )
}
