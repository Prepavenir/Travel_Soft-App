export interface BookingFormProps {
    first_name: string;
    last_name: string;
    arrival_date: string;
    leaving_date: string;
    number_of_guests?: number; //broj gostiju
}

export interface BookingFormState {
    submitted?: boolean;
    full_name: string;
    age: number;
}