import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import ItemForm from "../components/ItemForm";

const PostItem = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError("");

    try {
      await api.post("/items", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.error || "Failed to post item. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="card-macos p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-macos-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-macos-gray-900">
            Post New Item
          </h1>
          <p className="text-macos-gray-600 mt-1">
            Share your surplus food with the community
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-macos-red/10 border border-macos-red/20 text-macos-red px-4 py-3 rounded-macos mb-6 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <ItemForm onSubmit={handleSubmit} loading={loading} />

        {/* Tips */}
        <div className="mt-8 bg-macos-gray-50 rounded-macos p-4">
          <h3 className="text-sm font-medium text-macos-gray-900 mb-2">
            Tips for posting:
          </h3>
          <ul className="text-sm text-macos-gray-600 space-y-1">
            <li>• Add a clear photo to build trust</li>
            <li>• Be accurate about quantity and expiry date</li>
            <li>
              • Use descriptive names (e.g., "Fresh Baguettes" instead of
              "Bread")
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
