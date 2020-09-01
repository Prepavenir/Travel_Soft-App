import React from 'react';

export const Card = () => {
    return (
     <section className="card text-center mb-0 bg-white">
      <div className="container">
       <h1 className="card-heading">Display example</h1>
       <p className="lead text-muted">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
       Proin tincidunt lacinia malesuada. Vestibulum pharetra tempor
       ipsum, id consequat diam feugiat elementum. Proin placerat
       quam a feugiat ornare. Nunc congue orci sed magna hendrerit,
       sit amet egestas leo ullamcorper. Sed ullamcorper mi et tempor
       congue.
       </p>
       <p>
        <button className="btn btn-primary m-2">
         Destination
        </button>
        <button className="btn btn-secondary m-2">
         Dates of stay
        </button>
       </p>
      </div>
     </section>
    );
   };