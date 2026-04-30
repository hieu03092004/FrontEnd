import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { HomePage } from './pages/Home/Home';
import { AboutPage } from './pages/About/About';
import { Products } from './pages/Products/Products';
import Error404Page from './pages/Error/Error404';
import { LayoutDefault } from './layouts/LayoutDefault';
import { AboutUsPage } from './pages/About/AboutUs';
import { AboutHistoryPage } from './pages/About/AboutHistory';
import { AboutGeneralPage } from './pages/About/AboutGeneral';
import { ProductDetail } from './pages/Products/ProductDetail';
import { ProfilePage } from './pages/Profile/Profile';
import { LoginPage } from './pages/Login/Login';
import { ProtectedRoute } from './components/Route/ProtectedRoute';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}>
              <Route index element={<AboutGeneralPage />}/>
              <Route path='us' element={<AboutUsPage/>}/>
              <Route path='history' element={<AboutHistoryPage/>}/>
            </Route>
            <Route path='/products'>
                <Route index element={<Products/>}/>
                <Route path=':productId' element={<ProductDetail/>}/>
            </Route>
            <Route path='profile' element=
                 {<ProtectedRoute>
                    <ProfilePage/>
                  </ProtectedRoute>
                 }/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path="*" element={<Error404Page/>}/>
          </Route>
        </Routes>

      </BrowserRouter>
      
    </>
      
  );
}

export default App;
