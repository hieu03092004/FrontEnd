import './App.css';
import { LayoutDefault } from './layouts/LayoutDefault';
import { HomePage } from './pages/Home/Home';
import { ProductDetailPage } from './pages/Product/ProductDetail';
import { CartPage } from './pages/Cart/Cart';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { store } from './store';
import {Provider} from "react-redux"

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
              <Route element={<LayoutDefault/>}>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/products'>
                  <Route path=':productId' element={<ProductDetailPage/>}/>
                </Route>
                <Route path='/cart' element={<CartPage/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      
    </>
  );
}

export default App;
