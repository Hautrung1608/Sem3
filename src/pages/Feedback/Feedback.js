import React, { useState } from 'react';
import "./Feedback.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Feedback = () => {
    const schema = yup.object({
        email: yup.string().email("Please fill in the correct email").required("Please fill in your email"),
    }).required();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => {
        console.log("submitted")
    };



    return (
        <div className='flex justify-center align-center'>
            <div class="w-1/2 ">
                <div className='justify-center align-center mb-4 mt-4 pt-3' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                    <a className='text-4xl text-center '  >Feedback about us</a>
                </div>
                <form  >
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onBlur={handleSubmit(onSubmit)} action="https://formsubmit.co/hautrung16082003@gmail.com" method="POST">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-l font-bold mb-2" for="Fullname">
                                Fullname
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullnae" type="text" placeholder="Insert your Fullname ...*" required />
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-l font-bold mb-2" for="Email">
                                Email
                            </label>
                            <input
                                {...register("email")}
                                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Insert your email ...*"
                            />
                            {errors.email?.message && <p style={{ color: "red" }}> {errors.email?.message}</p>}
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-l font-bold mb-2" for="Content">
                                Content
                            </label>
                            <textarea rows="10" class="shadow appearance-none border border-red-500 rounded w-full px-3 py-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="content" type="textarea" placeholder='Insert your Content ....*' required />
                        </div>
                        <div class="flex items-center justify-center">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Send
                            </button>
                        </div>
                    </form>
                </form>
            </div>
        </div>

    )
}

export default Feedback;