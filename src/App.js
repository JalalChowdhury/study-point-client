// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

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
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        
        </BrowserRouter>

    </div>
  );
}

export default App;
