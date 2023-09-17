"use client";

import Navbar from '@components/Navbar';
import {createPetition} from '@data/petitions';
import React, {useState} from 'react';

const PetitionForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        description: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        await createPetition(formData);
    };

    return (
        <div className="h-screen w-full">
            <Navbar/>
            <div className="h-full flex flex-col justify-center items-center bg-primary-lightblue">
                <div
                    className="flex flex-col items-center rounded-lg gap-20  bg-white max-w-2xl mt-60 rounded-lg mb-40">
                    <div className="text-4xl mt-16 text-primary-darkblue font-bold ">Create Your Voice</div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-left items-start px-24 pb-16">
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={formData.title}
                                onChange={handleChange}
                                style={{width: '100%'}}
                                className="text-3xl font-bold border rounded-lg border-gray-300 p-2 text-primary-darkblue mb-10"
                            />
                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                value={formData.company}
                                onChange={handleChange}
                                style={{width: '100%'}}
                                className="text-2xl text-primary-darkblue rounded-lg border border-gray-300 p-2 mb-10"
                            />
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={formData.location}
                                onChange={handleChange}
                                style={{width: '100%'}}
                                className="text-2xl text-primary-darkblue rounded-lg border border-gray-300 p-2 mb-10"
                            />
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleChange}
                                className="text-sm mb-10 rounded-lg border border-gray-300 p-2 "
                                style={{width: '100%', height: '80px'}}
                            />
                            <button
                                type="submit"
                                className="bg-primary-darkblue text-white p-3 rounded"
                            >
                                Create Petition!
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default PetitionForm;
