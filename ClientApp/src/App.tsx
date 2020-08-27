import React from "react";
import { Route, Switch } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { NotFound } from "./components/NotFound";


import './custom.css'

export default () => (
    <Layout>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
            <Route component={NotFound} />
         </Switch>
    </Layout>
);
