import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Index';
import ScrollToTop from './utils/ScrollToTop';
import Layout from './components/Layout/Layout';
import Products from './pages/ProductsPage';
import Blogs from './pages/Blogs';
import ContactUS from './pages/Contacto';
import VisitaTienda from './pages/VisitaTienda';
import RentaXilin from './pages/Renta';
import SinglePostPage from './components/SinglePostPage/SinglePostPage';
import PageNotFound from './components/Error404/PageNotFound';
import Mantenimiento from './pages/ServicioMantenimiento';
import Testimonios from './pages/Testimonios';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import CategoryProductListPage from './pages/CategoryProductListPage/CategoryProductListPage';

function App() {

  return (
    <>
      <Router>

        <ScrollToTop />

        <Routes>
          
          <Route path='/' element={<Layout/>}>

            <Route index element={<IndexPage />}/>
            <Route path="productos" element={<Products />}/>
            <Route path='/productos/:id' element={<ProductDetailPage />} />
            <Route path='/productos/categoria/:categoryId' element={<CategoryProductListPage />} />
            <Route path="renta" element={<RentaXilin />}/>
            <Route path="servicio-mantenimiento" element={<Mantenimiento />}/>
            <Route path="contacto" element={<ContactUS />}/>
            <Route path="visita-nuestra-tienda" element={<VisitaTienda />}/>
            <Route path="blogs" element={<Blogs />}/>
            <Route path="blog/:id" element={<SinglePostPage />}/>
            <Route path="testimonios" element={<Testimonios />}/>

            <Route path='*' element={<PageNotFound />}/>
          </Route>

        </Routes>
      
      </Router>
    </>
  )
}

export default App;