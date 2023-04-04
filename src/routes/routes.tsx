import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from '../views/Home/Home.view';
import NotFound404 from '../views/NotFound404/NotFound404.view';

export default function RoutesPage() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/editores' element={<HomeView/>} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  </>
}