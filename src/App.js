import React from 'react';
import { Route, Switch} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import Home from "./pages/Home"
import SingleProduct from "./pages/SingleProduct"
import Cart from "./pages/Cart"
import Footer from "./components/Footer"
import News from "./pages/News"
import SingleNews from "./pages/SingleNews"
import Contact from "./pages/Contact"
import SideNav from "./components/SideNav"

function App() {
  return (
    <div className="App">
      <SideNav />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products/" component={Products}/>
        <Route exact path="/products/:slug" component={SingleProduct}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/news" component={News}/>
        <Route exact path="/news/1" component={SingleNews}/>
        <Route exact path="/contact" component={Contact}/>
        
      </Switch>
        <Footer />
    </div>
  );
}

export default App;
