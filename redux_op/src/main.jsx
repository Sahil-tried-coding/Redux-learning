import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import Store from './redux/Store.js'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
)
