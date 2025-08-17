import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import RouterConfig from './config/router.config'
import { AuthProvider } from './context/provider/auth.provider'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterConfig />
    </AuthProvider>
  </StrictMode>
)
