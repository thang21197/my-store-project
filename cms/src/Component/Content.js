import React, { Component } from 'react';
import Home from './Pages/Home';
import {    Switch,   Route } from "react-router-dom";
import Order from './Pages/Orders/Order';
import DetailOrder from './Pages/Orders/DetailOrder';
import Processed from './Pages/Orders/Processed';

import Category from './Pages/Products/Category';
import EditCategory from './Pages/Products/EditCategory';

import ListProduct from './Pages/Products/ListProduct';
import AddProduct from './Pages/Products/AddProduct';
import EditProduct from './Pages/Products/EditProduct';

import ListUser from './Pages/Users/ListUser';
import AddUser from './Pages/Users/AddUser';
import EditUser from './Pages/Users/EditUser';

class Content extends Component {
    render() {
        return (
         
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/order">
           <Order/>
          </Route>
          <Route path="/order/detail">
           <DetailOrder/>
          </Route>
          <Route path="/order/processed">
            <Processed/>
          </Route>
          <Route exact path="/category">
            <Category/>
          </Route>
          <Route path="/category/edit">
            <EditCategory/>
          </Route>
          <Route exact path="/product">
            <ListProduct/>
          </Route>
          <Route path="/product/edit">         
            <EditProduct/>
          </Route>
          <Route path="/product/add">
            <AddProduct/>
          </Route>
          <Route exact path="/users">
            <ListUser/>
          </Route>
          <Route path="/users/add">
            <AddUser/>
          </Route>
          <Route path="/users/edit">
            <EditUser/>
          </Route>
        </Switch>
        </div>
        );
    }
}

export default Content;