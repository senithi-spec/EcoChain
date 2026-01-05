import { useState, useEffect } from "react";
import api from "../services/api";

const MyClaims = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchMyClaims = async () => {
      try {
        const response = await api.get("/items/my-claims");
        setItems(response.data);
      } catch (error) {
        console.error("Failed to fetch claims:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyClaims();
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

  const handleCancel = async (itemId) => {
    setActionLoading(itemId);
    try {
      await api.patch(`/items/${itemId}/cancel`);
      setItems((prev) => prev.filter((item) => item.id !== itemId));
      setMessage({
        type: "success",
        text: "Reservation cancelled successfully!",
      });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.error || "Failed to cancel reservation",
      });
      setTimeout(() => setMessage(null), 3000);
    } finally {
      setActionLoading(null);
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-macos-gray-900">My Claims</h1>
        <p className="text-macos-gray-600 mt-1">
          Track your claimed food items
        </p>
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-macos-gray-900 mb-2">
            No claims yet
          </h3>
          <p className="text-macos-gray-600 mb-6">
            Browse the dashboard to claim available food items
          </p>
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
                  </div>

                  {/* Donor Info */}
                  <div className="mt-3 flex items-center space-x-2">
                    <span className="text-sm text-macos-gray-600">From:</span>
                    <div className="flex items-center space-x-1.5">
                      <div className="w-5 h-5 rounded-full bg-macos-blue flex items-center justify-center text-white text-xs">
                        {item.donor?.name?.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-macos-gray-900">
                        {item.donor?.name}
                      </span>
                    </div>
                  </div>

                  {/* Collection Details */}
                  {item.status === "RESERVED" && (
                    <div className="mt-4 p-3 bg-macos-blue/5 rounded-macos border border-macos-blue/10">
                      <h4 className="text-sm font-medium text-macos-gray-900 mb-2">
                        Collection Details
                      </h4>
                      {item.donor?.address && (
                        <p className="text-sm text-macos-gray-600 mb-1">
                          <span className="font-medium">Address:</span>{" "}
                          {item.donor.address}
                        </p>
                      )}
                      {item.donor?.phone && (
                        <p className="text-sm text-macos-gray-600 mb-1">
                          <span className="font-medium">Phone:</span>{" "}
                          {item.donor.phone}
                        </p>
                      )}
                      {item.pickupNotes && (
                        <p className="text-sm text-macos-gray-600">
                          <span className="font-medium">Notes:</span>{" "}
                          {item.pickupNotes}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Completed Info */}
                  {item.status === "COMPLETED" && item.collectedAt && (
                    <div className="mt-4 p-3 bg-macos-green/5 rounded-macos border border-macos-green/10">
                      <p className="text-sm text-macos-green">
                        ✓ Collected on {formatDate(item.collectedAt)}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  {item.status === "RESERVED" && (
                    <div className="mt-4 flex flex-wrap gap-2">
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
                            <span>Mark Collected</span>
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => handleCancel(item.id)}
                        disabled={actionLoading === item.id}
                        className="btn-macos bg-macos-gray-100 text-macos-gray-700 hover:bg-macos-gray-200 text-sm py-2 px-4"
                      >
                        Cancel Claim
                      </button>
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

export default MyClaims;
