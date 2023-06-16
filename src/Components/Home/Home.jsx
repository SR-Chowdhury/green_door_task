/**
 * Author: Shihanur Rahman Chowdhury
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Result from '../Result/Result';
import SelectOption from '../SelectOption/SelectOption';

const Home = () => {

    const car = ['AUDI', 'BMW', 'VAUXHAL', 'MERCEDES', 'PEUGEOT', 'RENAULT'];
    const carColours = ['BLUE', 'RED', 'BLACK', 'ORANGE'];
    const [selectedMake, setSelectedMake] = useState(null);
    const [selectedColour, setSelectedColour] = useState(null);
    const [formData, setFormData] = useState(null);
    const isColourDisabled = selectedMake === null;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        data.make = selectedMake;
        data.colour = selectedColour;
        const updatedFormData = { ...data };
        setFormData(updatedFormData);
        reset();
        setSelectedMake(null);
        setSelectedColour(null);
    }

    return (
        <div className='max-w-screen-xl mx-auto homeSection'>

            <form onSubmit={handleSubmit(onSubmit)} className='mt-9'>

                <SelectOption
                    name="make"
                    options={car}
                    selectedOption={selectedMake}
                    setSelectedOption={setSelectedMake}
                />

                <SelectOption
                    disabled={isColourDisabled}
                    name="colour" options={carColours}
                    selectedOption={selectedColour}
                    setSelectedOption={setSelectedColour}
                />

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">CODE<span className='label-text-alt ms-1 mt-2 text-red-600'>*</span></span>
                    </label>
                    <textarea {...register("code", { required: true, maxLength: 200 })} disabled={!selectedColour} className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    {errors.code && <span className='label-text-alt ms-1 mt-2 text-red-600'>Code field is required</span>}
                </div>

                <div>
                    <button disabled={!selectedColour} className='btn btn-outline mt-2 px-10'>DONE</button>
                </div>

            </form>

            {formData && <Result formData={formData} />}

        </div>
    );
};

export default Home;