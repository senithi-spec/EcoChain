import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-20">
        <div className="inline-flex items-center space-x-2 bg-macos-green/10 px-4 py-2 rounded-full mb-6">
          <span className="text-2xl">🌱</span>
          <span className="text-macos-green font-medium">
            Reduce Food Waste Together
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-macos-gray-900 mb-6">
          Connect. Share.{" "}
          <span className="bg-gradient-to-r from-macos-green to-emerald-600 bg-clip-text text-transparent">
            Save Food.
          </span>
        </h1>

        <p className="text-xl text-macos-gray-600 max-w-2xl mx-auto mb-10">
          EcoChain bridges the gap between food donors and receivers, enabling
          real-time transfer of surplus food before it spoils.
        </p>

        <div className="flex items-center justify-center space-x-4">
          {isAuthenticated ? (
            <Link
              to="/dashboard"
              className="btn-macos btn-primary px-8 py-3 text-lg"
            >
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/register"
                className="btn-macos btn-primary px-8 py-3 text-lg"
              >
                Get Started Free
              </Link>
              <Link
                to="/login"
                className="btn-macos btn-secondary px-8 py-3 text-lg"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center text-macos-gray-900 mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="card-macos p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-macos-blue to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🏪</span>
            </div>
            <h3 className="text-xl font-semibold text-macos-gray-900 mb-3">
              Donors Post Items
            </h3>
            <p className="text-macos-gray-600">
              Retailers and restaurants list surplus food nearing expiration
              with photos and details.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card-macos p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-macos-green to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-macos-gray-900 mb-3">
              Real-Time Dashboard
            </h3>
            <p className="text-macos-gray-600">
              Charities browse available items instantly with live updates as
              new items are posted.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card-macos p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-macos-purple to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✅</span>
            </div>
            <h3 className="text-xl font-semibold text-macos-gray-900 mb-3">
              Claim & Collect
            </h3>
            <p className="text-macos-gray-600">
              Receivers claim items instantly, removing them from the feed and
              coordinating pickup.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="glass rounded-macos-xl p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-macos-green mb-2">
                1.3B
              </div>
              <p className="text-macos-gray-600">
                Tons of food wasted annually
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-macos-blue mb-2">
                100%
              </div>
              <p className="text-macos-gray-600">Free for all organizations</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-macos-purple mb-2">
                Real-time
              </div>
              <p className="text-macos-gray-600">Instant notifications</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold text-macos-gray-900 mb-4">
          Ready to reduce food waste?
        </h2>
        <p className="text-xl text-macos-gray-600 mb-8">
          Join EcoChain today and make a difference in your community.
        </p>
        <Link
          to="/register"
          className="btn-macos btn-success px-10 py-4 text-lg"
        >
          Start Saving Food Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
