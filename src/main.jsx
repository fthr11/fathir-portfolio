import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './assets/pages/main-page';
import './index.css'


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<MainPage/>}/>
    </Routes>
  </BrowserRouter>
)