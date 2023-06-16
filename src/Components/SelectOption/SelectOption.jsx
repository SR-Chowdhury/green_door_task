import React from 'react';

const SelectOption = ({ name, options, selectedOption, setSelectedOption, disabled }) => {

    const handleOptions = event => setSelectedOption(event.target.value);

    return (
        <div className='flex gap-4'>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">{name}</span>
                </label>
                <input type="text" defaultValue={selectedOption} readOnly className="input input-bordered w-full" />
            </div>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Select Option <span className='text-[red]'>*</span></span>
                </label>
                <select disabled={disabled} required defaultValue={'Select One'} onChange={handleOptions} className='input input-bordered'>
                    <option disabled>Select One</option>
                    {
                        options.map((item, i) => <option key={i} value={item}>{item}</option>)
                    }
                </select>
            </div>

        </div>
    );
};

export default SelectOption;