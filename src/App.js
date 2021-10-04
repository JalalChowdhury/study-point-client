// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import CoachingServices from './Components/CoachingServices/CoachingServices';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Successful from './Components/Successful/Successful';

function App() {
  return (
    <div className="App">
       
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/services">
                  <CoachingServices></CoachingServices>
                </Route>
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="/contact">
                    <ContactUs></ContactUs>
                </Route>
                <Route path="/successful">
                    <Successful></Successful>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
            <Footer></Footer>
        
        </BrowserRouter>

    </div>
  );
}

export default App;
