import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormField } from "../components/FormField";
import type { LoginFormInputs } from "../types/type";
import { useAuth } from "../context/AuthContext";
import Notification from "../components/Notifications";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const LoginPage: React.FC = () => {
  const { loginUser } = useAuth();
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const isValidUser = loginUser(data);
      if (isValidUser) {
        setNotification({ message: "Login successful! 🎉", type: "success" });

        setTimeout(() => {
          navigate("/DashboardPage"); // Redirect user after login
        }, 1000);
      } else {
        setNotification({ message: "Invalid email or password. Try again.", type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setNotification({ message: "Something went wrong. Please try again.", type: "error" });
    }
  };

  return (
    <section className="login-page">
      <div className="container">
        <h1 className="visually-hidden">Login Page</h1>
        <Link className="btn btn--secondary login-page__back-btn" to="/">Back To Home</Link>
        <div className="login-page__intro">
          <h2 className="login-page__title">Welcome back</h2>
          <span className="login-page__note">
            Don't have an account?
            <Link className="login-page__note-link" to="/RegisterPage"> Sign Up</Link>
          </span>
        </div>

        {/* Show Notification if Exists */}
        {notification && (
          <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />
        )}

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <FormField label="Email" type="email" name="email" register={register} error={errors.email} placeholder="Email address" />

          <FormField label="Password" type="password" name="password" register={register} error={errors.password} placeholder="Password" />

          <button type="submit" className="btn btn--secondary btn--secondary-xl login-form__submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
