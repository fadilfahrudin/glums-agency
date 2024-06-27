import ReactDOM from 'react-dom/client'
import './styles/css/index.css'
import AppRoutes from './router/AppRoutes.tsx'
import { BrowserRouter } from 'react-router-dom'
import ReduxProvider from './components/reduxProvider/index.tsx'
import Pointer from './components/pointer/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ReduxProvider>
      {window.innerWidth > 1080 ?
        <Pointer /> : null
      }
      <AppRoutes />
    </ReduxProvider>
  </BrowserRouter>,
)
