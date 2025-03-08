import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import registerImg from "../assets/register.webp";

// Validation Schema with Required Fields
const registerSchema = z.object({
    name: z.string().nonempty("Name is required").min(2, "Name must be at least 2 characters"),
    email: z.string().nonempty("Email is required").email("Invalid email address"),
    password: z.string().nonempty("Password is required").min(6, "Password must be at least 6 characters"),
});

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = (data) => {
        console.log("User registered:", data);
        // Handle form submission logic here
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Left Section - Form */}
            <div className="w-1/2 flex justify-center items-center bg-white p-12 shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                    <div className="flex justify-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-900">TrendHive</h2>
                    </div>

                    <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
                        Create Your Account
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                        Sign up to access your dashboard.
                    </p>

                    {/* Name Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            {...register("name")}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your name"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            {...register("password")}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Sign Up
                    </button>

                    {/* Forgot Password & Login Link */}
                    <div className="mt-6 text-center text-sm text-gray-600">
                        <Link to="/forgot-password" className="text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>

            {/* Right Section - Image */}
            <div className="w-1/2 flex items-center justify-center bg-gray-800">
                <img
                    src={registerImg}
                    alt="Register Illustration"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default Register;
