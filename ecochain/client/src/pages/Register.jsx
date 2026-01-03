import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "DONOR",
    orgId: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (formData.role === "RECEIVER" && !formData.orgId) {
      setError("Organization ID is required for receivers");
      return;
    }

    if (!formData.phone) {
      setError("Phone number is required");
      return;
    }

    if (formData.role === "DONOR" && !formData.address) {
      setError("Collection address is required for donors");
      return;
    }

    setLoading(true);

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        orgId: formData.role === "RECEIVER" ? formData.orgId : undefined,
        phone: formData.phone,
        address: formData.role === "DONOR" ? formData.address : undefined,
      });
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.error || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="card-macos p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-macos-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌱</span>
            </div>
            <h1 className="text-2xl font-bold text-macos-gray-900">
              Create your account
            </h1>
            <p className="text-macos-gray-600 mt-1">
              Join EcoChain and start reducing food waste
            </p>
          </div>

          {/* Role Toggle */}
          <div className="flex bg-macos-gray-100 rounded-macos p-1 mb-6">
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({ ...prev, role: "DONOR" }))
              }
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                formData.role === "DONOR"
                  ? "bg-white shadow-sm text-macos-gray-900"
                  : "text-macos-gray-600 hover:text-macos-gray-900"
              }`}
            >
              🏪 Donor
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({ ...prev, role: "RECEIVER" }))
              }
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                formData.role === "RECEIVER"
                  ? "bg-white shadow-sm text-macos-gray-900"
                  : "text-macos-gray-600 hover:text-macos-gray-900"
              }`}
            >
              🏥 Receiver
            </button>
          </div>

          {/* Role Description */}
          <div className="bg-macos-gray-50 rounded-macos p-4 mb-6">
            {formData.role === "DONOR" ? (
              <p className="text-sm text-macos-gray-600">
                <span className="font-medium text-macos-gray-900">Donors</span>{" "}
                are retailers, bakeries, or restaurants that want to share
                surplus food.
              </p>
            ) : (
              <p className="text-sm text-macos-gray-600">
                <span className="font-medium text-macos-gray-900">
                  Receivers
                </span>{" "}
                are charities, food banks, or organizations that collect food
                donations.
              </p>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-macos-red/10 border border-macos-red/20 text-macos-red px-4 py-3 rounded-macos mb-6 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-macos-gray-700 mb-2">
                {formData.role === "DONOR"
                  ? "Business Name"
                  : "Organization Name"}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-macos"
                placeholder={
                  formData.role === "DONOR"
                    ? "Your Business Name"
                    : "Your Organization Name"
                }
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-macos-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-macos"
                placeholder="you@example.com"
                required
              />
            </div>

            {formData.role === "RECEIVER" && (
              <div>
                <label className="block text-sm font-medium text-macos-gray-700 mb-2">
                  Organization ID
                </label>
                <input
                  type="text"
                  name="orgId"
                  value={formData.orgId}
                  onChange={handleChange}
                  className="input-macos"
                  placeholder="Your Organization Registration ID"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-macos-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-macos"
                placeholder="+94 (77) 45-96926"
                required
              />
            </div>

            {formData.role === "DONOR" && (
              <div>
                <label className="block text-sm font-medium text-macos-gray-700 mb-2">
                  Collection Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="input-macos min-h-[80px]"
                  placeholder="Where receivers can collect food items"
                  required
                />
                <p className="text-xs text-macos-gray-500 mt-1">
                  This address will be shown to receivers when they claim items
                </p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-macos-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-macos"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-macos-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-macos"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-macos btn-primary py-3 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  <span>Creating account...</span>
                </>
              ) : (
                <span>Create Account</span>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-macos-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-macos-blue font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
