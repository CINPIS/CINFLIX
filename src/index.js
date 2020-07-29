import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';
import CadastroVideo from './Pages/Cadastro/Video/Index';
import CadastroCategoria from './Pages/Cadastro/Categoria/Index';

const notFound = () => {
  return(
    <div>
      Página não encontrada, erro 404.
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route  path="/" component={Home} exact />
      <Route  path="/cadastro/video" component={CadastroVideo} /> 
      <Route  path="/cadastro/categoria" component={CadastroCategoria} />
      <Route  path="/" component={notFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// serviceWorker.unregister();
