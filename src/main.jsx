import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './assets/pages/main-page';
import './index.css'

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path = "/" element = {<MainPage/>}/>
    </Routes>
  </BrowserRouter>
)