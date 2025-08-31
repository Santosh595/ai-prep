import Button from "../button/Button";

const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white/20 backdrop-filter backdrop-blur-lg border border-white/30 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 scale-100 opacity-100">
        {/* Close Button */}
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200 text-2xl font-bold p-2 rounded-full hover:bg-white/10"
          aria-label="Close modal"
        >
          &times;
        </Button>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center drop-shadow-md">
          Create an Account
        </h2>
        <p className="text-white/80 text-base sm:text-lg mb-6 text-center">
          Join prepAI to get started!
        </p>

        {/* Signup Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-white/30 bg-white/10 text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition duration-200 placeholder-white/60"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
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

          {/* Password */}
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

          {/* Submit Button */}
          <Button
            variant="solid"
            className="w-full py-3 text-lg shadow-md hover:shadow-lg"
            type="submit"
          >
            Sign Up
          </Button>
        </form>

        {/* Already have an account link */}
        <p className="mt-6 text-center text-white/80 text-sm">
          Already have an account?{" "}
          <a href="#" className="text-accent hover:underline font-medium">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
