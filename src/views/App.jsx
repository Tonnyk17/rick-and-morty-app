import { InfoCard } from './organisms/InfoCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MainMenu } from './pages/MainMenu';

export const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/:type' element={<MainMenu/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

