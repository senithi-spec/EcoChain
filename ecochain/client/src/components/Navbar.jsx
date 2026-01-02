import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout, isAuthenticated, isDonor, isReceiver } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-macos-green to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌱</span>
            </div>
            <span className="text-xl font-semibold text-macos-gray-900">
              EcoChain
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-macos-gray-600 hover:text-macos-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-macos-gray-100"
                >
                  Dashboard
                </Link>

                {isDonor && (
                  <>
                    <Link
                      to="/post-item"
                      className="text-macos-gray-600 hover:text-macos-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-macos-gray-100"
                    >
                      Post Item
                    </Link>
                    <Link
                      to="/my-posts"
                      className="text-macos-gray-600 hover:text-macos-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-macos-gray-100"
                    >
                      My Posts
                    </Link>
                  </>
                )}

                {isReceiver && (
                  <Link
                    to="/my-claims"
                    className="text-macos-gray-600 hover:text-macos-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-macos-gray-100"
                  >
                    My Claims
                  </Link>
                )}

                <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-macos-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-macos-blue to-blue-600 flex items-center justify-center text-white text-sm font-medium">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-sm font-medium text-macos-gray-900">
                        {user?.name}
                      </p>
                      <p className="text-xs text-macos-gray-500">
                        {user?.role}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="btn-macos btn-secondary text-sm"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-macos btn-secondary">
                  Sign In
                </Link>
                <Link to="/register" className="btn-macos btn-primary">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
