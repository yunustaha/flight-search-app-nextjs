import { ErrorMessage, Field, FieldAttributes } from 'formik'
import Select from 'react-select';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Airport } from './Model';
import { toast } from 'react-toastify';

export type SelectProps = {
    name: string;
    label: string;
}


const FormSelect: React.FC<SelectProps> = ({name, label}) => {
    const [values, setValues] = useState<Array<Airport>>()

    const getDestinations = function (): void {
        axios({
            method: 'GET',
            url: 'http://localhost:3001/airports',
        }).then((response) => {
            setValues(response.data);  
        })
        .catch(() => toast.error("Error!"))
    }

    useEffect(() => {
        getDestinations();
    }, [])

    return (
        <div>
            <label>{label}</label>
            <Field required id={name} name={name}>
                {({
                    field,
                    form,
                }: FieldAttributes<any>) => (
                    <div>
                        <Select
                            id={name}
                            className="basic-single"
                            classNamePrefix="select"
                            defaultValue={field.value ? field.value.value : undefined}
                            onChange={option => form.setFieldValue(name, option)}
                            isSearchable={true}
                            name={name}
                            options={values}
                        />
                        <ErrorMessage name={name} component="div" className="text-red-600 mt-1" />
                    </div>
                )}
            </Field>
        </div>
    )
}

export default FormSelect

