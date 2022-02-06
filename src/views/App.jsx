import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MainMenu } from './pages/MainMenu';
import { InfoPage } from './pages/InfoPage';
import { Provider } from 'react-redux';
import { generateStore } from '../redux/store';

export const App = () => {
  const store = generateStore()
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/:type' element={<MainMenu/>} />
                <Route path='/:type/:id' element={<InfoPage/>} />
            </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

