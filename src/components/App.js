import React from 'react';
import css from './App.module.css';
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import Responses from 'components/Responses';
import NewPost from 'components/NewPost';
import Profile from 'components/Profile';
import SignIn from 'components/SignIn';
import Home from 'components/Home';
import Landing from 'components/Landing';
import PostDetails from 'components/PostDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContextStoreProvider from 'contexts/StoreContext'


function App() {
  return (
    <Router>
      <ContextStoreProvider>
        <div className={css.container}>
          <Header />
          <main className={css.contents}>
            <Switch>
            <Route path='/PostDetails/:postId?'>
                <PostDetails />
              </Route>
              <Route path='/responses'>
                <Responses />
              </Route>
              <Route path='/createNew'>
                <NewPost />
              </Route>
              <Route path='/profile/:userId?'>
                <Profile />
              </Route>
              <Route path='/home'>
                <Home />
              </Route>
              <Route path='/signIn'>
                <SignIn />
              </Route>
              <Route path='/'>
                <Landing />
              </Route>
            </Switch>
          </main>
          <Navbar/>
        </div>
      </ContextStoreProvider>
    </Router>
  );
}

export default App;
