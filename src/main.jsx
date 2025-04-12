import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom'
import MainPage from './assets/pages/main-page';
import './index.css'

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <HashRouter basename={import.meta.env.BASE_}>
    <Routes>
      <Route path = "/" element = {<MainPage/>}/>
    </Routes>
  </HashRouter>
)