import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// импорт css из отдельного файла
import './index.css'
// здесь происходит импорт компонента для дальнеёшего использования
import App from './App.jsx'


// в этом файле мы находим div c id root и добавляем в него код

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* здесь происходит вызов компонента App с вёрсткой */}
    <App />
  </StrictMode>,
)
