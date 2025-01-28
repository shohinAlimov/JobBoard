import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormField } from "../components/FormField";
import type { LoginFormInputs } from "../types/type";
import { useAuth } from "../context/AuthContext";
import Notification from "../components/Notifications"; // Import Notification Component

const registerSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const RegisterPage: React.FC = () => {
  const { addUser, users } = useAuth(); // Get auth functions
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      // Check if the email is already registered
      if (users.some((user) => user.email === data.email)) {
        setNotification({ message: "User with this email already exists!", type: "error" });
        return;
      }

      addUser(data); // Add user to global state
      setNotification({ message: "Registration successful! You can now log in.", type: "success" });
      setTimeout(() => {
        navigate("/LoginPage"); // Redirect user after login
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      setNotification({ message: "Something went wrong. Please try again.", type: "error" });
    }
  };

  return (
    <section className="register-page">
      <div className="container">
        <h1 className="visually-hidden">Registration Page</h1>
        <Link className="btn btn--secondary register-page__back-btn" to="/">Back To Home</Link>
        <div className="register-page__intro">
          <h2 className="register-page__title">Create an account</h2>
          <span className="register-page__note">
            Already have an account?
            <Link className="register-page__note-link" to="/LoginPage"> Sign In</Link>
          </span>
        </div>

        {/* Show Notification if Exists */}
        {notification && (
          <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />
        )}

        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <FormField label="Email" type="email" name="email" register={register} error={errors.email} placeholder="Email address" />

          <FormField label="Password" type="password" name="password" register={register} error={errors.password} placeholder="Password" />

          <button type="submit" className="btn btn--secondary btn--secondary-xl register-form__submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
