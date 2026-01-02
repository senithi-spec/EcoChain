import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import { socket, connectSocket, disconnectSocket } from "../services/socket";
import ItemCard from "../components/ItemCard";

const Dashboard = () => {
  const { user, isDonor, isReceiver } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [claiming, setClaiming] = useState(null);
  const [message, setMessage] = useState(null);

  // Fetch items
  const fetchItems = async () => {
    try {
      const response = await api.get("/items");
      setItems(response.data);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    } finally {
      setLoading(false);
    }
  };

  // Socket connection
  useEffect(() => {
    connectSocket();

    socket.on("item:new", (item) => {
      setItems((prev) => [item, ...prev]);
    });

    socket.on("item:claimed", ({ itemId }) => {
      setItems((prev) => prev.filter((item) => item.id !== itemId));
    });

    return () => {
      socket.off("item:new");
      socket.off("item:claimed");
      disconnectSocket();
    };
  }, []);

  useEffect(() => {
    fetchItems();
  }, []);

  // Claim item
  const handleClaim = async (itemId) => {
    setClaiming(itemId);
    try {
      await api.patch(`/items/${itemId}/claim`);
      setItems((prev) => prev.filter((item) => item.id !== itemId));
      setMessage({ type: "success", text: "Item claimed successfully!" });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.error || "Failed to claim item",
      });
      setTimeout(() => setMessage(null), 3000);
    } finally {
      setClaiming(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-macos-gray-900">
            {isDonor ? "Available Food Items" : "Food Dashboard"}
          </h1>
          <p className="text-macos-gray-600 mt-1">
            {isDonor
              ? "See what food is available in the community"
              : "Browse and claim available food items"}
          </p>
        </div>

        {isDonor && (
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
        )}
      </div>

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

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card-macos p-4">
          <p className="text-sm text-macos-gray-500">Available Items</p>
          <p className="text-2xl font-bold text-macos-gray-900">
            {items.length}
          </p>
        </div>
        <div className="card-macos p-4">
          <p className="text-sm text-macos-gray-500">Your Role</p>
          <span
            className={`badge ${isDonor ? "badge-donor" : "badge-receiver"}`}
          >
            {user?.role}
          </span>
        </div>
        <div className="card-macos p-4">
          <p className="text-sm text-macos-gray-500">Status</p>
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 bg-macos-green rounded-full animate-pulse"></span>
            <span className="text-sm text-macos-green font-medium">Live</span>
          </div>
        </div>
        <div className="card-macos p-4">
          <p className="text-sm text-macos-gray-500">Updates</p>
          <p className="text-sm text-macos-gray-700">Real-time</p>
        </div>
      </div>

      {/* Items Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-macos-blue"></div>
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-macos-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🥗</span>
          </div>
          <h3 className="text-xl font-semibold text-macos-gray-900 mb-2">
            No items available
          </h3>
          <p className="text-macos-gray-600 mb-6">
            {isDonor
              ? "Be the first to post surplus food!"
              : "Check back soon for new items"}
          </p>
          {isDonor && (
            <Link to="/post-item" className="btn-macos btn-primary">
              Post Your First Item
            </Link>
          )}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onClaim={handleClaim}
              claiming={claiming}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
