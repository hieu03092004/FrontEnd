import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { HomePage } from './pages/Home/Home';
import { ProductPage } from './pages/Products/Product';
import { ArticlePage } from './pages/Article/Article';
import { LoginPage } from './pages/Auth/Login';
import { RegisterPage } from './pages/Auth/Register';
import { Error404Page } from './pages/Error/Error404';
import { LayoutDefault } from './layouts/LayoutDefault';
import { ProfilePage } from './pages/Profile/Profile';


function App() {
  return (
      <>
          <BrowserRouter>
            <Routes>
              <Route element={<LayoutDefault/>}>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="products" element={<ProductPage />} />
                <Route path="articles" element={<ArticlePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="*" element={<Error404Page />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
