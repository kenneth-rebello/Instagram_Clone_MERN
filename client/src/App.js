
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// PAGES
import HomePage from './pages/home/HomePage';
import SignupPage from './pages/auth/SignupPage';
import LoginPage from './pages/auth/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';
import SettingsPage from './pages/settings/SettingsPage';
import ExplorePage from './pages/explore/ExplorePage';
import NewPostPage from './pages/new_post/NewPostPage';

// COMPONENTS
import Header from './components/header/Header';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
          <Route exact path="/new-post">
            <NewPostPage />
          </Route>
          <Route exact path="/explore">
            <ExplorePage />
          </Route>
          <Route exact path="/settings">
            <SettingsPage />
          </Route>
          <Route exact path="/:username">
            <ProfilePage />
          </Route>
          <Route exact path="/">
            { true ? <HomePage /> : <LoginPage/>}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
