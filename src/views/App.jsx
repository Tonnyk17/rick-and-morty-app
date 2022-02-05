import { InfoCard } from './organisms/InfoCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MainMenu } from './pages/MainMenu';
import { InfoPage } from './pages/InfoPage';

export const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/:type' element={<MainMenu/>} />
              <Route path='/:type/:id' element={<InfoPage/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

