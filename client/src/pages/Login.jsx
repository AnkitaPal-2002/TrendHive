import React, { useState } from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import loginImg from "../assets/login.webp";
import { Link } from "react-router-dom";

    // Validation Schema with Required Fields
    const loginSchema = z.object({
        email: z.string().nonempty("Email is required").email("Invalid email address"),
        password: z.string().nonempty("Password is required").min(6, "Password must be at least 6 characters"),
    });

    

const Login = () => {

    const {
        register : login,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });
    

    
    const onSubmit = (data) => {
        console.log("User logged in:", data);
        // Handle form submission logic here
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Left Section - Form */}
            <div className="w-1/2 flex justify-center items-center bg-white p-12 shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                    {/* Brand Logo */}
                    <div className="flex justify-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-900">TrendHive</h2>
                    </div>

                    <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
                        Welcome Back!
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                        Please enter your details to sign in.
                    </p>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            {...login("email")}
                            
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            {...login("password")}
                            
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Sign In
                    </button>

                    {/* Forgot Password & Register Link */}
                    <div className="mt-6 text-center text-sm text-gray-600">
                        <Link to="/forgot-password" className="text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register here
                        </Link>
                    </p>
                </form>
            </div>

            {/* Right Section - Image */}
            <div className="w-1/2 flex items-center justify-center bg-gray-800">
                <img
                    src={loginImg}
                    alt="Login Illustration"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default Login;
