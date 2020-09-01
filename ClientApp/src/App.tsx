import React from "react";
import { Route, Switch } from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home';
import Renters from './components/Renters';
import GuestsList from "./components/GuestsList";
import BookingForm from "./components/BookingForm";
import { NotFound } from "./components/NotFound";


import './custom.css'

export default () => (
    <Layout>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/renters' component={Renters} />
            <Route path='/guest-list' component={GuestsList} />
            <Route path='/book-now' component={BookingForm} />
            <Route component={NotFound} />
         </Switch>
    </Layout>
);