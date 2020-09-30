import React from 'react';
import { Route, Switch} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import Home from "./pages/Home"
import SingleProduct from "./pages/SingleProduct"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products/" component={Products}/>
        <Route exact path="/products/:slug" component={SingleProduct}/>
      </Switch>
        
    </div>
  );
}

export default App;
