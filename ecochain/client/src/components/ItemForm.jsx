import { useState } from "react";

const ItemForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    expiry: "",
    pickupNotes: "",
  });
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          photo: "File size must be less than 5MB",
        }));
        return;
      }
      if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          photo: "Only JPG and PNG files are allowed",
        }));
        return;
      }
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
      setErrors((prev) => ({ ...prev, photo: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Item name is required";
    }

    if (!formData.quantity || parseInt(formData.quantity) <= 0) {
      newErrors.quantity = "Quantity must be a positive number";
    }

    if (!formData.expiry) {
      newErrors.expiry = "Expiry date is required";
    } else {
      const expiryDate = new Date(formData.expiry);
      if (expiryDate <= new Date()) {
        newErrors.expiry = "Expiry date must be in the future";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("quantity", formData.quantity);
      data.append("expiry", formData.expiry);
      if (formData.pickupNotes) {
        data.append("pickupNotes", formData.pickupNotes);
      }
      if (photo) {
        data.append("photo", photo);
      }
      onSubmit(data);
    }
  };

  // Get minimum date (tomorrow)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Item Name */}
      <div>
        <label className="block text-sm font-medium text-macos-gray-700 mb-2">
          Item Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`input-macos ${
            errors.name ? "border-macos-red focus:ring-macos-red/30" : ""
          }`}
          placeholder="e.g., Fresh Baguettes"
        />
        {errors.name && (
          <p className="mt-1.5 text-sm text-macos-red">{errors.name}</p>
        )}
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm font-medium text-macos-gray-700 mb-2">
          Quantity
        </label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          min="1"
          className={`input-macos ${
            errors.quantity ? "border-macos-red focus:ring-macos-red/30" : ""
          }`}
          placeholder="e.g., 10"
        />
        {errors.quantity && (
          <p className="mt-1.5 text-sm text-macos-red">{errors.quantity}</p>
        )}
      </div>

      {/* Expiry Date */}
      <div>
        <label className="block text-sm font-medium text-macos-gray-700 mb-2">
          Expiry Date
        </label>
        <input
          type="date"
          name="expiry"
          value={formData.expiry}
          onChange={handleChange}
          min={getMinDate()}
          className={`input-macos ${
            errors.expiry ? "border-macos-red focus:ring-macos-red/30" : ""
          }`}
        />
        {errors.expiry && (
          <p className="mt-1.5 text-sm text-macos-red">{errors.expiry}</p>
        )}
      </div>

      {/* Pickup Notes */}
      <div>
        <label className="block text-sm font-medium text-macos-gray-700 mb-2">
          Pickup Instructions (Optional)
        </label>
        <textarea
          name="pickupNotes"
          value={formData.pickupNotes}
          onChange={handleChange}
          className="input-macos min-h-[80px]"
          placeholder="e.g., Use back entrance, ask for John, available after 5pm"
        />
        <p className="text-xs text-macos-gray-500 mt-1">
          Add any special instructions for collecting this item
        </p>
      </div>

      {/* Photo Upload */}
      <div>
        <label className="block text-sm font-medium text-macos-gray-700 mb-2">
          Photo (Optional)
        </label>
        <div className="relative">
          {photoPreview ? (
            <div className="relative rounded-macos overflow-hidden">
              <img
                src={photoPreview}
                alt="Preview"
                className="w-full h-48 object-cover"
              />
              <button
                type="button"
                onClick={() => {
                  setPhoto(null);
                  setPhotoPreview(null);
                }}
                className="absolute top-2 right-2 w-8 h-8 bg-macos-gray-900/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-macos-gray-900/80 transition-colors"
              >
                ✕
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-macos-gray-300 rounded-macos cursor-pointer hover:border-macos-blue transition-colors bg-macos-gray-50/50">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-10 h-10 text-macos-gray-400 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm text-macos-gray-600">
                  <span className="font-medium text-macos-blue">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-macos-gray-400 mt-1">
                  PNG, JPG up to 5MB
                </p>
              </div>
              <input
                type="file"
                accept="image/jpeg,image/jpg,image/png"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </label>
          )}
        </div>
        {errors.photo && (
          <p className="mt-1.5 text-sm text-macos-red">{errors.photo}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-macos btn-primary py-3 flex items-center justify-center space-x-2"
      >
        {loading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
            <span>Posting...</span>
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>Post Item</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ItemForm;
