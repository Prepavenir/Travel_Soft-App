import React from 'react';
// Redux stuff
import { connect } from 'react-redux';

import { Card } from './Card';
import { Guests } from './Guests';


const Home = () => (
  <main role="main">
   <Card />
   <div className="album py-5 bg-light">
    <div className="container">
     <div className="row">
      <Guests />
      <Guests />
      <Guests />
      <Guests />
      <Guests />
      <Guests />
      <Guests />
      <Guests />
      <Guests />
     </div>
    </div>
   </div>
  </main>
);

export default connect()(Home);
