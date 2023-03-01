import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Error from './components/pages/Error.jsx';
import ItemPage from './components/pages/ItemPage.jsx';
import MainPage from './components/pages/MainPage.jsx';

function App() {

  const routesArray = [
    {path: '/', element: MainPage},
    {path: '/main', element: MainPage},
    {path: '/main/:id', element: ItemPage},
    {path: '/error', element: Error}]

  return (
    <div className="App">
      <BrowserRouter>
        <div className='body'>
          <Routes>
              {
                  routesArray.map(route => 
                      <Route
                          element={<route.element />}
                          path={route.path}
                          key={route.path}
                      />
                  )
              }
              <Route path='/*' element={<Navigate to="/error" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
