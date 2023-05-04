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
        <Route path='/theme-clock' element={<Project12 title="Project 12 - Theme Clock" />} />
        <Route path='/button-ripple-effect' element={<Project13 title="Project 13 - Button Ripple Effect" />} />
        <Route path='/kinetic-loader' element={<Project14 title="Project 14 - Kinetic Loader" />} />
        <Route path='/skeleton-loader-card' element={<Project15 title="Project 15 - Skeleton Loader Card" />} />
        <Route path='/vertical-slider' element={<Project16 title="Project 16 - Vertical Slider" />} />
        <Route path='/toast-notification' element={<Project17 title="Project 17 - Toast Notification" />} />
        <Route path='/github-profiles' element={<Project18 title="Project 18 - GitHub Profiles" />} />
        <Route path='/double-click-heart' element={<Project19 title="Project 19 - Double Click Heart" />} />
        <Route path='/auto-text-effect' element={<Project20 title="Project 20 - Auto Text Effect" />} />
        <Route path='/password-generator' element={<Project21 title="Project 21 - Password Generator" />} />
        <Route path='/good-cheap-fast' element={<Project22 title="Project 22 - Good, Cheap, Fast" />} />
        <Route path='/note-app' element={<Project23 title="Project 23 - Note App" />} />
        <Route path='/animated-countdown' element={<Project24 title="Project 24 - Animated Countdown" />} />
        
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
import Project12 from '../projects/Project12/Project12';
import Project13 from '../projects/Project13/Project13';
import Project14 from '../projects/Project14/Project14';
import Project15 from '../projects/Project15/Project15';
import Project16 from '../projects/Project16/Project16';
import Project17 from '../projects/Project17/Project17';
import Project18 from '../projects/Project18/Project18';
import Project19 from '../projects/Project19/Project19';
import Project20 from '../projects/Project20/Project20';
import Project21 from '../projects/Project21/Project21';
import Project22 from '../projects/Project22/Project22';
import Project23 from '../projects/Project23/Project23';
import Project24 from '../projects/Project24/Project24';