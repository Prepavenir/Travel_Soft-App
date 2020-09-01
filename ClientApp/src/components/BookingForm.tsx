import React from 'react';
//import {BookingFormProps, BookingFormState}  from '../types/index';

// Redux stuff
import { connect } from 'react-redux';

//export class BookingForm extends React.Component<BookingFormProps, BookingFormState> {

const BookingForm = () => {
    return (
        <form style={{ textAlign: "center" }}>
            <div className="display-4">Pojedinosti o rezervaciji</div>
            <label>
                Ime:
                    <br />
                    <input 
                        type="text" 
                        name="first_name"
                        // onChange={this.handleInputChange}
                    />
            </label>
            <br />
            <label>
                Prezime:
                    <br />
                    <input 
                        type="text" 
                        name="last_name" 
                    />
            </label>
            <br />
            <label>
                Datum dolaska:
                    <br />
                    <input 
                        type="date" 
                        name="arrival_date" 
                    />
            </label>
            <br />
            <label>
                Datum odlaska:
                    <br />
                    <input 
                        type="date" 
                        name="leaving_date" 
                    />
            </label>
            <br />
            <label>
                Broj gostiju:
                    <br />
                    <input                        
                        type="number" 
                        name="number_of_guests"
                        max="100"
                    />
              </label>
            <br />
            <input 
                type="submit" 
                value="Rezervirajte sada"
                onClick={() => {
                    alert('Čestitamo na rezervaciji!');
                  }} 
            />
        </form>
    );
};

export default connect()(BookingForm);