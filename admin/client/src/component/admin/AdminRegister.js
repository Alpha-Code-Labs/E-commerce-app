import React, { useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

function AdminRegister() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, email, password, confirmPassword } = data;
  
    if (userName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const response = await axios.post('http://localhost:9002/api/admin/signup', data);
          console.log('Registration successful', response.data);
          toast.success(response.data.message);
          navigate('/login');
        } catch (error) {
          if (error.response && error.response.data) {
            console.error('Registration failed', error.response.data);
            toast.error(error.response.data.message);
          } else {
            console.error('Registration failed', error);
            toast.error('An error occurred during registration');
          }
        }
      } else {
        toast.error('Password and Confirm Password do not match');
      }
    } else {
      toast.error('Please fill in all required fields');
    }
  };
  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm bg-white flex flex-col p-4 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Register</h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="userName" className="text-sm font-medium">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            className="border py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={data.userName}
            onChange={handleOnChange}
          />

          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <div className="flex items-center border rounded focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="flex-1 py-2 px-3 outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="text-xl px-3 cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm Password
          </label>
          <div className="flex items-center border rounded focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              className="flex-1 py-2 px-3 outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="text-xl px-3 cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="bg-red-500 hover:bg-red-600 text-white text-xl font-medium py-2 rounded-full">
            Sign up
          </button>
        </form>

        <p className="text-sm mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AdminRegister;

