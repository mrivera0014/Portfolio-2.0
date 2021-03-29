import React from 'react'
import { BrowserRouter as Router, Switch, Route, hashHistory } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router history={hashHistory}>
      <Nav />

      <Switch>
        <Route exact path={"/"} component={Home}></Route>

        <Route exact path={"/projects"} component={Projects}></Route>

        <Route exact path={"/contact"} component={Contact}></Route>

        <Route exact path={"/resume"} component={Resume}></Route>
        <Route exact path={"*"} component={notFound} />
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
