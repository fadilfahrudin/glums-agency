import ReactDOM from 'react-dom/client'
import './styles/index.css'
import AppRoutes from './router/AppRoutes.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
)
