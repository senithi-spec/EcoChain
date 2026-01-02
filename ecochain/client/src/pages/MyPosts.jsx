import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const MyPosts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const response = await api.get("/items/my-posts");
        setItems(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyPosts();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "AVAILABLE":
        return <span className="badge badge-available">Available</span>;
      case "RESERVED":
        return <span className="badge badge-reserved">Reserved</span>;
      case "COMPLETED":
        return (
          <span className="badge bg-macos-gray-100 text-macos-gray-600">
            Completed
          </span>
        );
      default:
        return null;
    }
  };

  const apiUrl = import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-macos-gray-900">My Posts</h1>
          <p className="text-macos-gray-600 mt-1">
            Manage your posted food items
          </p>
        </div>
        <Link
          to="/post-item"
          className="mt-4 sm:mt-0 btn-macos btn-primary inline-flex items-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span>Post New Item</span>
        </Link>
      </div>

      {/* Items */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-macos-blue"></div>
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-macos-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">📦</span>
          </div>
          <h3 className="text-xl font-semibold text-macos-gray-900 mb-2">
            No posts yet
          </h3>
          <p className="text-macos-gray-600 mb-6">
            Start sharing your surplus food with the community
          </p>
          <Link to="/post-item" className="btn-macos btn-primary">
            Post Your First Item
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="card-macos p-4 sm:p-6">
              <div className="flex items-start space-x-4">
                {/* Image */}
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-macos-gray-100 rounded-macos overflow-hidden">
                  {item.photoUrl ? (
                    <img
                      src={`${apiUrl}${item.photoUrl}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-3xl">🥗</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-macos-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-macos-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    {getStatusBadge(item.status)}
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-macos-gray-500">
                    <span>Expires: {formatDate(item.expiry)}</span>
                    <span>Posted: {formatDate(item.createdAt)}</span>
                  </div>

                  {item.receiver && (
                    <div className="mt-3 flex items-center space-x-2">
                      <span className="text-sm text-macos-gray-600">
                        Claimed by:
                      </span>
                      <div className="flex items-center space-x-1.5">
                        <div className="w-5 h-5 rounded-full bg-macos-purple flex items-center justify-center text-white text-xs">
                          {item.receiver.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-macos-gray-900">
                          {item.receiver.name}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPosts;
