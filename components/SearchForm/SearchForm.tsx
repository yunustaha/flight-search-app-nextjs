"use client"

import { Field, Form, Formik } from 'formik';
import Toggle, { Item } from "@/components/Toggle/Toggle";
import { useState } from 'react';
import { GiCommercialAirplane } from 'react-icons/gi';
import FormSelect from './Selects/FormSelect';
import { Flight } from '@/app/SearchModel';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Airport } from './Selects/Model';

const toggleValues = [
    { value: 1, label: 'SINGLE TRIP' },
    { value: 2, label: 'ROUND TRIP' }
]

const initialValues = {
    departureAirport: undefined,
    arrivalAirport: undefined,
    departureDate: '',
    returnDate: '',
    passengers: 1,
}

type FormTypes = {
    departureAirport?: Airport;
    arrivalAirport?: Airport;
    departureDate: string;
    returnDate: string;
    passengers: number;
}

type FormProps = {
    setSearchResult: (value: Array<Flight>) => void;
    setIsLoading: (value: boolean) => void;
}

const SearchForm: React.FC<FormProps> = ({ setSearchResult, setIsLoading }) => {
    const [selectedToggle, setSelectedToggle] = useState<Item>(toggleValues[0])

    const handleSubmit = (values: FormTypes) => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: 'http://localhost:3001/flights',
            params: {
                departure: values.departureAirport?.value,
                destination: values.arrivalAirport?.value,
                departure_time: values.departureDate
            }
        }).then((response) => {
            setIsLoading(false);
            setSearchResult(response.data);
            toast.success('Success!');
        }).catch(() => toast.error("Error!"))
    }

    const validate = (values: FormTypes) => {
        let errorObject = {};

        if (!values.departureAirport) {
            errorObject = { ...errorObject, departureAirport: 'This field is required' }
        }

        if (!values.arrivalAirport) {
            errorObject = { ...errorObject, arrivalAirport: 'This field is required' }
        }

        return errorObject;
    };

    return (
        <div className='flex flex-col gap-8'>
            <div className='flex justify-center items-center text-3xl gap-4'>
                <GiCommercialAirplane className={'text-primary'} />
                <h1>Search Form</h1>
            </div>
            <Toggle onClick={setSelectedToggle} defaultValue={toggleValues[0]} items={toggleValues} />
            <Formik onSubmit={handleSubmit} initialValues={initialValues} validate={validate}>
                <Form className='space-y-8 text-textLabel text-sm font-medium'>
                    <div className='grid grid-cols-2 gap-y-8 gap-x-4'>
                        <FormSelect name='departureAirport' label='ORIGIN' />
                        <FormSelect name='arrivalAirport' label='DESTINATION' />
                        <div>
                            <label htmlFor="departureDate">DEPARTURE</label>
                            <Field
                                required
                                id="departureDate"
                                name="departureDate"
                                type="date"
                                className='input-form'
                            />
                        </div>
                        <div>
                            <label htmlFor="returnDate">RETURN</label>
                            <Field
                                required
                                readOnly={selectedToggle && selectedToggle.value == 1}
                                id="returnDate"
                                name="returnDate"
                                type="date"
                                className='input-form'
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="passengers">PASSENGERS</label>
                        <Field
                            required
                            id="passengers"
                            name="passengers"
                            type="number"
                            className='input-form'
                        />
                    </div>
                    <div>
                        <button className='btn-form' type="submit">SEARCH</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default SearchForm;
