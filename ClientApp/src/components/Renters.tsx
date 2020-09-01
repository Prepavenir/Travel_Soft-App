import React from 'react';
import { Link } from 'react-router-dom';
// Redux stuff
import { connect } from 'react-redux';

const Renters = () => {
    return (
        <div className="col-md-4">
            <div className="renters mb-4 box-shadow">
                <img
                    className="renters-img-top"
                    src="https://picsum.photos/id/1065/300/200.jpg"
                    alt="Renters"
                />
                <div className="renters-body">
                    <p className="renters-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin tincidunt lacinia malesuada.
                    </p>
                <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                            >
                                <Link to='/book-now'>Book</Link>
                            </button>
                        </div>
                        <small className="text-muted">Naziv sobe</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect()(Renters);
