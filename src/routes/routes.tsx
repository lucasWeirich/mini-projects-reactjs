import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from '../views/Home/Home.view';
import NotFound404 from '../views/NotFound404/NotFound404.view';

export default function RoutesPage() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView title="All Projects - FrontEnd" />} />
        
        <Route path='/expanding-cards' element={<Project01 title="Project 01 - Expanding Cards" />} />
        <Route path='/progress-steps' element={<Project02 title="Project 02 - Progress Steps" />} />
        <Route path='/blurry-loading' element={<Project03 title="Project 03 - Blurry Loading" />} />
        <Route path='/scroll-animation' element={<Project04 title="Project 04 - Scroll Animation" />} />
        <Route path='/form-input-wave' element={<Project05 title="Project 05 - Form Input Wave" />} />
        <Route path='/sound-board' element={<Project06 title="Project 06 - Sound Board" />} />
        <Route path='/random-jokes' element={<Project07 title="Project 07 - Random Jokes" />} />
        <Route path='/random-choice-picker' element={<Project08 title="Project 08 - Random Choice Picker" />} />
        <Route path='/increment-counter' element={<Project09 title="Project 09 - Increment Counter" />} />
        <Route path='/drink-water' element={<Project10 title="Project 10 - Drink Water" />} />
        <Route path='/background-slider' element={<Project11 title="Project 11 - Background Slider" />} />
        
        <Route path='*' element={<NotFound404 title="Not Found - 404" />} />
      </Routes>
    </BrowserRouter>
  </>
}

/* Import of all projects */
import Project01 from '../projects/Project01/Project01';
import Project02 from '../projects/Project02/Project02';
import Project03 from '../projects/Project03/Project03';
import Project04 from '../projects/Project04/Project04';
import Project05 from '../projects/Project05/Project05';
import Project06 from '../projects/Project06/Project06';
import Project07 from '../projects/Project07/Project07';
import Project08 from '../projects/Project08/Project08';
import Project09 from '../projects/Project09/Project09';
import Project10 from '../projects/Project10/Project10';
import Project11 from '../projects/Project11/Project11';