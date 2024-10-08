import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (

    <Router>

      <Navbar />

   <Switch>
      <Container customClass="min-height">
    
        <Route exact path="/">
        <Home />
        </Route>

        <Route exact path="/company">
        <Company />
        </Route>

        <Route exact path="/contact">
        <Contact />
        </Route>

        <Route exact path="/Projects">
        <Projects />
        </Route>


        <Route exact path="/newproject">
        <NewProject />
        </Route>
    </Container>  
  </Switch>
  
      <Footer></Footer>

    </Router>



  );
}

export default App;

