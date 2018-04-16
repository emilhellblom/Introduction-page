import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/LandingPage';
import BaseLayout from './components/BaseLayout';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Portfolio } from './components/Portfolio';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/interests" component={Interests} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
