

import React, { useState } from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useContext } from 'react';
  import { AppContext } from './context';


export const Contact = () => {
  const { mode } = useContext(AppContext);
  const [option, setOption] = useState("");
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email:"", phoneNumber:"", text:"" });
    const [errors, setErrors] = useState({ firstName: "", email: "" ,lastName:"", phoneNumber:"", text:""});

    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    
    const validateForm = () => {
      let formErrors = { firstName: "", email: "", lastName:"", phoneNumber:"", text:"" };

     
      if (!formData.firstName) {
        formErrors.firstName = "First Name is required";
      }
       if (!formData.lastName) {
         formErrors.lastName = "last Name is required";
      }
       if (!formData.phoneNumber) {
         formErrors.phoneNumber = "phone Number is required";
      }
        if (!formData.text) {
          formErrors.text = "text is required";
        }

      
      if (!formData.email) {
        formErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        formErrors.email = "Email is not valid";
      }

      setErrors(formErrors);
      return Object.values(formErrors).every((error) => error === "");
    };

    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        
        alert("Message submitted:");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          text: "",
        });
      }
    };

  return (
    <div
      className={`${
        mode ? "bg-black" : "bg-gradient-to-r from-yellow-600 to-pink-600"
      } pb-4 h-screen pt-4 pl-44 flex flex-row space-x-8`}
    >
      <div className="w-1/2 h-auto  bg-[#140C1C] flex flex-col rounded-md   px-10 py-6 ">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-700 to-white bg-clip-text text-transparent">
          Let’s work together!
        </h2>
        <p className="text-white mt-4">
          I design and code beautifully simple things and i love what i do. Just
          simple like that!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row space-x-4 mt-4">
            <div className="w-1/2">
              <label className="text-white">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-12 border border-slate-800 pl-2  rounded-md bg-black text-white"
              ></input>
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div className="w-1/2">
              <label className="text-white">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-12 border border-slate-800 pl-2 rounded-md bg-black text-white"
              ></input>
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-row space-x-4 mt-4">
            <div className="w-1/2">
              <label className="text-white">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className=" w-full h-12 border border-slate-800 pl-2 rounded-md bg-black text-white"
              ></input>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="w-1/2">
              <label className="text-white">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full h-12 border border-slate-800 pl-2 rounded-md bg-black text-white"
              ></input>
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            className="h-12 bg-black mt-4 text-white border border-slate-800 w-full"
          >
            <option>Choose Service</option>
            <option value="Web">Web Development</option>
            <option value="Mobile">Mobile Development</option>
          </select>
          <div>
            <label className="text-white mt-4">Message</label>
            <textarea
              type="text"
              name="text"
              placeholder="Type your Message"
              value={formData.text}
              onChange={handleChange}
              className="w-full h-28 border border-slate-800 pl-2 rounded-md bg-black text-white"
            ></textarea>
            {errors.text && (
              <p className="mt-1 text-sm text-red-500">{errors.text}</p>
            )}
          </div>

          <button
            type="submit"
            className="text-white bg-gradient-to-r from-purple-700 to-purple-950 hover:bg-gradient-to-r hover:from-purple-950 hover:to-purple-700 ml-4 px-4 py-2 w-fit mt-6 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="space-y-8 w-1/2 flex flex-col justify-center">
        <div className="flex flex-row space-x-4">
          <div className="rounded-full h-12 w-12 flex flex-col justify-center items-center text-white bg-gradient-to-r from-purple-700 to-purple-950 hover:bg-gradient-to-r hover:from-purple-950 hover:to-purple-700 cursor-pointer">
            <FiPhoneCall className="w-6 h-6" />
          </div>
          <div className="flex flex-col space-y-1 font-bold text-white">
            <p>Phone</p>
            <p>+250786170670</p>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <div className="rounded-full h-12 w-12 flex flex-col justify-center items-center text-white bg-gradient-to-r from-purple-700 to-purple-950 hover:bg-gradient-to-r hover:from-purple-950 hover:to-purple-700 cursor-pointer">
            <MdOutlineMailOutline className="w-6 h-6" />
          </div>
          <div className="flex flex-col space-y-1 font-bold text-white">
            <p>Email</p>
            <p>nyiranezalouise93@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <div className="rounded-full h-12 w-12 flex flex-col justify-center items-center text-white bg-gradient-to-r from-purple-700 to-purple-950 hover:bg-gradient-to-r hover:from-purple-950 hover:to-purple-700 cursor-pointer">
            <CiLocationOn className="w-6 h-6" />
          </div>
          <div className="flex flex-col space-y-1 font-bold text-white">
            <p>Location</p>
            <p>Kimironko kg 15/ kigali/Gasabo</p>
          </div>
        </div>
      </div>
    </div>
  );
}