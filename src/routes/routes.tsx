import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from '../views/Home/Home.view';
import NotFound404 from '../views/NotFound404/NotFound404.view';
import Project01 from '../projects/Project01/Project01';
import Project02 from '../projects/Project02/Project02';
import usePageTitle from '../hook/usePageTitle';
import Project03 from '../projects/Project03/Project03';

export default function RoutesPage() {
  usePageTitle('Not Found');

  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView title="All Projects - FrontEnd" />} />
        <Route path='/project01' element={<Project01 title="Project 01 - Expanding Cards" />} />
        <Route path='/project02' element={<Project02 title="Project 02 - Progress Steps" />} />
        <Route path='/project03' element={<Project03 title="Project 03 - Blurry Loading" />} />
        <Route path='*' element={<NotFound404 title="Not Found - 404" />} />
      </Routes>
    </BrowserRouter>
  </>
}