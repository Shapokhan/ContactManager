import React from 'react';
import { Provider } from './Context'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contacts from './components/contact/Contacts'
import Header from './components/layout/Header'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import AddContact from './components/contact/AddContact'
import EditContact from './components/contact/EditContact'
import Test from './components/Test/Test'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <Provider>
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Switch>
            <Route exact path ="/" component={Contacts}/>
            <Route exact path ="/about/:id" component={About}/>
            <Route exact path ="/contact/add" component={AddContact}/>
            <Route exact path ="/contact/edit/:id" component={EditContact}/>
            <Route exact path ="/test" component={Test}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
