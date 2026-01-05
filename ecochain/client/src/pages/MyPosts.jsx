import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const MyPosts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);
  const [message, setMessage] = useState(null);

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
          <span className="badge bg-macos-green/10 text-macos-green">
            Completed
          </span>
        );
      default:
        return null;
    }
  };

  const handleComplete = async (itemId) => {
    setActionLoading(itemId);
    try {
      await api.patch(`/items/${itemId}/complete`);
      setItems((prev) =>
        prev.map((item) =>
          item.id === itemId
            ? { ...item, status: "COMPLETED", collectedAt: new Date() }
            : item
        )
      );
      setMessage({ type: "success", text: "Item marked as collected!" });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.error || "Failed to mark as collected",
      });
      setTimeout(() => setMessage(null), 3000);
    } finally {
      setActionLoading(null);
    }
  };

  const apiUrl = import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Message Toast */}
      {message && (
        <div
          className={`fixed top-24 right-4 z-50 animate-slide-in ${
            message.type === "success"
              ? "bg-macos-green text-white"
              : "bg-macos-red text-white"
          } px-6 py-3 rounded-macos shadow-macos-lg`}
        >
          {message.text}
        </div>
      )}

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
            <svg
              className="w-10 h-10 text-macos-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
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
                      <svg
                        className="w-8 h-8 text-macos-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
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
                        {item.receiver.phone && (
                          <span className="text-sm text-macos-gray-500">
                            • {item.receiver.phone}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Button for Reserved Items */}
                  {item.status === "RESERVED" && (
                    <div className="mt-4">
                      <button
                        onClick={() => handleComplete(item.id)}
                        disabled={actionLoading === item.id}
                        className="btn-macos btn-primary text-sm py-2 px-4 flex items-center space-x-1"
                      >
                        {actionLoading === item.id ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        ) : (
                          <>
                            <span>✓</span>
                            <span>Confirm Collection</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Completed Info */}
                  {item.status === "COMPLETED" && item.collectedAt && (
                    <div className="mt-3 text-sm text-macos-green">
                      ✓ Collected on {formatDate(item.collectedAt)}
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
