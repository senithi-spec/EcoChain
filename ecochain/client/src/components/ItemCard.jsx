import { useAuth } from "../context/AuthContext";

const ItemCard = ({ item, onClaim, claiming }) => {
  const { isReceiver } = useAuth();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getExpiryStatus = (expiry) => {
    const now = new Date();
    const expiryDate = new Date(expiry);
    const diffDays = Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24));

    if (diffDays <= 1)
      return { text: "Expires today", color: "text-macos-red" };
    if (diffDays <= 3)
      return { text: `${diffDays} days left`, color: "text-macos-orange" };
    return { text: `${diffDays} days left`, color: "text-macos-green" };
  };

  const expiryStatus = getExpiryStatus(item.expiry);
  const apiUrl = import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";

  return (
    <div className="card-macos overflow-hidden animate-fade-in">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-macos-gray-100 to-macos-gray-200">
        {item.photoUrl ? (
          <img
            src={`${apiUrl}${item.photoUrl}`}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-macos-gray-400"
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

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className="badge badge-available">Available</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title and Quantity */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-macos-gray-900 line-clamp-1">
            {item.name}
          </h3>
          <span className="flex-shrink-0 ml-2 bg-macos-gray-100 px-2.5 py-1 rounded-lg text-sm font-medium text-macos-gray-700">
            ×{item.quantity}
          </span>
        </div>

        {/* Donor Info */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-macos-blue to-blue-600 flex items-center justify-center text-white text-xs font-medium">
            {item.donor?.name?.charAt(0).toUpperCase()}
          </div>
          <span className="text-sm text-macos-gray-600">
            {item.donor?.name}
          </span>
        </div>

        {/* Collection Location */}
        {item.donor?.address && (
          <div className="flex items-start space-x-1.5 mb-3 text-sm text-macos-gray-500">
            <svg
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="line-clamp-2">{item.donor.address}</span>
          </div>
        )}

        {/* Pickup Notes */}
        {item.pickupNotes && (
          <div className="mb-3 p-2 bg-macos-gray-50 rounded-lg text-xs text-macos-gray-600">
            <span className="font-medium">Note:</span> {item.pickupNotes}
          </div>
        )}

        {/* Expiry Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1.5">
            <svg
              className="w-4 h-4 text-macos-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className={`text-sm font-medium ${expiryStatus.color}`}>
              {expiryStatus.text}
            </span>
          </div>
          <span className="text-xs text-macos-gray-400">
            {formatDate(item.expiry)}
          </span>
        </div>

        {/* Claim Button (Receivers Only) */}
        {isReceiver && (
          <button
            onClick={() => onClaim(item.id)}
            disabled={claiming === item.id}
            className="w-full btn-macos btn-success flex items-center justify-center space-x-2"
          >
            {claiming === item.id ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                <span>Claiming...</span>
              </>
            ) : (
              <>
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Claim Item</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
