import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";
import { Switch, Route } from 'react-router-dom';
import Client from '../utils/client';
import Header from '../components/header';
import Footer from '../components/footer';
import Home from '../containers/home';
import Faqs from '../containers/faqs';
import '../styles/App.css';

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={Client}>
      <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/faqs" component={Faqs} />
          </Switch>
          <Footer />
      </div>
    </ApolloProvider>
  </BrowserRouter>
)

export default App;
