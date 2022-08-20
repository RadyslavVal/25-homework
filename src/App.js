import './App.css';
import React, { Component } from 'react';
import Home from './components/pages/home/Home.js';
import Posts from './components/pages/posts/Posts.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Contacts from './components/pages/contacts/Contacts.js';
import Album from './components/pages/album/Album.js';
import { contacts } from './service.js';
import ContactInfo from './components/pages/contacts/ContactInfo/ContactInfo.js';

export default class App extends Component {
  render() {
    const baseUrl = "/25-homework";
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path={`${baseUrl}/`} exact>
              <Home />
            </Route>
            <Route path={`${baseUrl}/posts`}>
              <Posts />
            </Route>
            <Route path={`${baseUrl}/album`}>
              <Album />
            </Route>
            <Route path={`${baseUrl}/contacts`} exact>
              <Contacts />
            </Route>
            {contacts.map((contact, i) =>
              <Route path={`${baseUrl}/contacts/${contact.firstName}${contact.lastName}`} key={i} >
                <ContactInfo data={contact} />
              </Route>)}
          </Switch>
        </div>
      </Router >
    )
  }
}

