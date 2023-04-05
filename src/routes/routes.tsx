import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from '../views/Home/Home.view';
import NotFound404 from '../views/NotFound404/NotFound404.view';
import Project01 from '../projects/Project01/Project01';
import Project02 from '../projects/Project02/Project02';

export default function RoutesPage() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/project01' element={<Project01 title="Project 01 - Expanding Cards" />} />
        <Route path='/project02' element={<Project02 title="Project 02 - nao sei o q é ainda" />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  </>
}