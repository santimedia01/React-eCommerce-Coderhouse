import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'; 
/** Si se posee un back-end con Peticiones Dinámicas, usar BrowserRouter
 * sinó, si se está utilizando algo como Github Pages (Sitios Estáticos) usar HashRouter
 */

import PaginaNoEncontrada from './components/error/404/PaginaNoEncontrada';
import PaginaPrincipal from "./pages/Principal";
import Navbar from './components/common/navbar/Navbar';

const Router = () => (
  <HashRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={PaginaPrincipal} /> 
      <Route component={PaginaNoEncontrada} />
    </Switch>
  </HashRouter>
);

export default Router;