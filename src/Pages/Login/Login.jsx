import React, { useState, useEffect, useRef } from "react";
import { apiGDG } from "../../../services/api.gdg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Meta from "../../Components/Meta/Mata";

export default function Login({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [animationStage, setAnimationStage] = useState("closed");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.body.style.overflow = "hidden";
      setAnimationStage("opening");
      setTimeout(() => setAnimationStage("open"), 50);
    } else {
      setAnimationStage("closing");
      const timeout = setTimeout(() => {
        setShow(false);
        setAnimationStage("closed");
        document.body.style.overflow = "";
        setError("");
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const validationSchema = Yup.object({
    username: Yup.string().required("UserName is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      setError("");
      try {
        const res = await apiGDG.post("/login", {
          username: values.username,
          password: values.password,
        });
        if (res.success && res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("role", res.data.role);
          navigate("/admin");
        } else {
          setError(res?.data?.message || "Login failed");
          toast.error(res?.data?.message || "Login failed");
        }
      } catch (err) {
        if (err?.error?.response) {
          setError(err.error.response.data?.message || "Login failed");
        } else {
          setError("Connection error. Please try again.");
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  if (!show) return null;

  return (
    <>
      <Meta
        title="GDG Minya | Login"
        description="Access the admin panel of GDG Minya by logging in with your credentials."
        keywords="GDG Minya, Login, Admin, Authentication"
      />

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          animationStage === "opening" || animationStage === "open"
            ? "bg-black/50 backdrop-blur-md"
            : "bg-transparent backdrop-blur-0"
        }`}
        style={{
          opacity:
            animationStage === "opening" || animationStage === "open" ? 1 : 0,
          transition: "opacity 0.4s ease-out, backdrop-filter 0.4s ease-out",
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
      >
        <div
          ref={modalRef}
          className={`bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all ${
            animationStage === "opening" || animationStage === "open"
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 -translate-y-4"
          }`}
          style={{ transition: "all 0.35s cubic-bezier(0.2,0.8,0.2,1)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-linear-to-r from-primary to-[#478af5] px-6 py-6 rounded-t-2xl relative overflow-hidden">
            <h2
              id="login-title"
              className="text-2xl font-bold text-white relative z-10"
            >
              Login
            </h2>
            <p className="text-blue-100 text-sm mt-1 relative z-10">
              Enter your account credentials
            </p>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-all duration-300 z-10"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <form onSubmit={formik.handleSubmit} className="px-6 py-6">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Username */}
            <label className="block text-primary font-semibold text-sm mb-2">
              UserName
            </label>
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your UserName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#478af5] mb-1"
              required
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 text-sm mb-2">
                {formik.errors.username}
              </div>
            )}

            {/* Password */}
            <label className="block text-primary font-semibold text-sm mb-2">
              Password
            </label>
            <div className="relative mb-6">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#478af5]"
                required
              />
              <button
                type="button"
                onClick={() => setPasswordVisible((s) => !s)}
                className="absolute top-1/2 -translate-y-1/2 right-3 p-1 rounded"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
              >
                {passwordVisible ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.048.163-2.06.468-3.017M3.6 3.6L20.4 20.4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-linear-to-r from-primary to-[#478af5] text-white font-bold py-3 rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  </svg>
                  Logging in...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
