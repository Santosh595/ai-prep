import Button from "../button/Button";

const LoginModal = ({ isOpen, onClose }) => {
  // If the modal is not open, return null to render nothing.
  if (!isOpen) return null;

  return (
    // Modal Overlay: Fixed position, full screen, semi-transparent black background
    // to dim the content behind the modal.
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Modal Content Container: Glassmorphic styling with white/20 background,
          backdrop blur, border, rounded corners, and shadow. */}
      <div className="bg-white/20 backdrop-filter backdrop-blur-lg border border-white/30 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 scale-100 opacity-100">
        {/* Close Button: Absolute position, top right corner, styled as a circle. */}
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200 text-2xl font-bold p-2 rounded-full hover:bg-white/10"
          aria-label="Close modal"
        >
          &times; {/* Times symbol for close */}
        </Button>

        {/* Modal Title: "Welcome Back!" message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center drop-shadow-md">
          Welcome Back!
        </h2>
        <p className="text-white/80 text-base sm:text-lg mb-6 text-center">
          Please log in to your account.
        </p>

        {/* Login Form */}
        <form className="space-y-5">
          {/* Email Input Field */}
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-white/30 bg-white/10 text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition duration-200 placeholder-white/60"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password Input Field */}
          <div>
            <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-white/30 bg-white/10 text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition duration-200 placeholder-white/60"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="#" className="text-accent hover:underline text-sm font-medium">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <Button
            variant="solid"
            className="w-full py-3 text-lg shadow-md hover:shadow-lg"
            type="submit" // Set type to submit for form submission
          >
            Login
          </Button>
        </form>

        {/* Sign Up Link for users without an account */}
        <p className="mt-6 text-center text-white/80 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-accent hover:underline font-medium">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal