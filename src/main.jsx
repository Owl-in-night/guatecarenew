// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// // React Router Dom
// import { BrowserRouter } from 'react-router'
// // i18next
// import '../i18n'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// )
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// React Router Dom
import { BrowserRouter } from 'react-router'
// i18next
import '../i18n'
import Spinner from './_partials/Spinner.jsx'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Spinner />}>
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  </Suspense>,
)
