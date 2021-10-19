import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Doctors from './components/Doctors/Doctors';
import Pricing from './components/Pricing/Pricing';
import LogIn from './components/LogIn/LogIn';
import Resister from './components/Resister/Resister';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import ServiceData from './components/ServiceData/ServiceData';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
      <div className="App">
        <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/service-data'>
              <ServiceData></ServiceData>
            </PrivateRoute>
            <Route path='/doctors'>
              <Doctors></Doctors>
            </Route>
            <Route path='/pricing'>
              <Pricing></Pricing>
            </Route>
            <Route path='/log-in'>
              <LogIn></LogIn>
            </Route>
            <Route path='/resister'>
              <Resister></Resister>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
