import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'; 
/** Si se posee un back-end con Peticiones Dinámicas, usar BrowserRouter
 * sinó, si se está utilizando algo como Github Pages (Sitios Estáticos) usar HashRouter
 */

import PaginaNoEncontrada from './components/error/404/PaginaNoEncontrada';
import PaginaPrincipal from "./pages/Principal";
import Producto from "./pages/Producto";
import Carrito from "./pages/Carrito";
import Checkout from "./pages/Checkout";
import Navbar from './components/common/navbar/Navbar';
import ListadoProductosCategorias from './pages/ListadoProductosCategoria';

import {CartProvider} from './contexts/cartContext';

//import {uploadProduct} from './services/firebase/firestoreServiceAdminAPI';

const Router = () => (
  <HashRouter>
    <CartProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={PaginaPrincipal} />
        <Route exact path="/carrito" component={Carrito} />
        <Route exact path="/checkout" component={Checkout} /> 
        <Route path="/productos/:id" component={Producto} />
        <Route path="/categorias/:name" component={ListadoProductosCategorias} />
        <Route exact path="/admin">
          {/*uploadProduct("Yeso", "Yeso Tuyango Monocapa Manual", "Caract.Adicional	Conservar en envase original, perfectamente cerrado, en lugar seco, fresco y no expuesto al sol", "25kg", "https://media.easy.com.ar/is/image/EasyArg/1019269-1", 265, 1, 499.69, 2500, 654, "1-Yeso-Tuyango-Monocapa-Manual-30kg")*/}
        </Route> 
        <Route component={PaginaNoEncontrada} />
      </Switch>
    </CartProvider>
  </HashRouter>
);

export default Router;