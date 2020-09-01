import React from 'react';
import { Link } from 'react-router-dom';

export const Guests = () => {
    return (
     <div className="col-md-4">
      <div className="guests mb-4 box-shadow">
       <img
        className="guests-img-top"
        src="https://picsum.photos/id/142/300/200.jpg"
        alt="Guests"
       />
       <div className="guests-body">
        <p className="guests-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Proin tincidunt lacinia malesuada.
        </p>
        <div className="d-flex justify-content-between align-items-center">
         <div className="btn-group">
          <button
           type="button"
           className="btn btn-sm btn-outline-secondary"
          >
           Details
          </button>
          <button
           type="button"
           className="btn btn-sm btn-outline-secondary"
          >
          <Link to='/book-now'>Book now !</Link>
          </button>
         </div>
         <small className="text-muted">Naziv sobe</small>
        </div>
       </div>
      </div>
     </div>
    );
   };