import './App.css'
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Componentes que siempre se cargan */
import ScrollToTop from './utils/ScrollToTop';
import Layout from './components/Layout/Layout';

/* Carga de las páginas */
const IndexPage = lazy(() => import('./pages/Index'));
const Products = lazy(() => import('./pages/ProductsPage'));
const Blogs = lazy(() => import('./pages/Blogs'));
const ContactUS = lazy(() => import('./pages/Contacto'));
const VisitaTienda = lazy(() => import('./pages/VisitaTienda'));
const RentaXilin = lazy(() => import('./pages/Renta'));
const SinglePostPage = lazy(() => import('./components/SinglePostPage/SinglePostPage'));
const PageNotFound = lazy(() => import('./components/Error404/PageNotFound'));
const Mantenimiento = lazy(() => import('./pages/ServicioMantenimiento'));
const Testimonios = lazy(() => import('./pages/Testimonios'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage/ProductDetailPage'));
const CategoryProductListPage = lazy(() => import('./pages/CategoryProductListPage/CategoryProductListPage'));

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    Cargando página...
  </div>
);

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </Router>
    </>
  )
}

export default App;