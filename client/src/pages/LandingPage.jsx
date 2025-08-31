import { useState } from "react";
import Button from "../components/button/Button";
import LoginModal from "../components/login/LoginModal";
import SignupModal from "../components/signup/SignupModal";



function LandingPage() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

  // Function to open the login modal
  const openLoginModal = () => setShowLoginModal(true);
  const openSingupModal = () => setShowSignupModal(true);
  // Function to close the login modal
  const closeLoginModal = () => setShowLoginModal(false);
  const closeSignupModal = () => setShowSignupModal(false);
    return (
    <div className="min-h-screen flex flex-col font-inter">
      <section
        className=" bg-gradient-to-b from-deep-green to-white flex flex-col overflow-hidden relative"
        role="region"
        aria-label="Hero Section"
      >
        <header className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-3 sm:py-4 relative z-10">
          <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
            PrepAI
          </h1>
          <div className="flex gap-3 sm:gap-4">
            <Button
              variant="outline"
              className="text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-2.5 hover:bg-white/10 transition-colors duration-200"
              onClick={openLoginModal}
            >
              Login
            </Button>
            <Button
              variant="solid"
              className="text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-2.5 hover:bg-opacity-90 transition-colors duration-200"
              onClick={openSingupModal}
            >
              Sign Up
            </Button>
          </div>
        </header>
        <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 flex-1 gap-8 sm:gap-10 lg:gap-16 max-w-7xl mx-auto w-full">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4 sm:mb-6">
              Ace Interviews with <br />
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                AI-Powered
              </span>{" "}
              Learning
            </h2>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 sm:space-y-8">
            <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
              Get role-specific questions, expand answers when you need them, dive deeper into concepts, and organize everything your way. From preparation to mastery—your ultimate interview toolkit is here.
            </p>
            <Button
              variant="solid"
              className="text-base sm:text-lg lg:text-xl px-8 sm:px-10 py-3 sm:py-3.5 hover:bg-opacity-90 transition-colors duration-200 shadow-lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-b from-white to-deep-green py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12"
        role="region"
        aria-label="Key Features"
      >
        <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deep-green leading-tight">
            Unlock Your Interview Potential
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Discover the powerful features that make PrepAI your go-to platform for interview success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
 
          <div className="bg-white/20 backdrop-filter backdrop-blur-lg border border-white/30 rounded-2xl p-6 sm:p-8 text-center shadow-xl transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold text-deep-green mb-3">Tailored Just For You</h3>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              Receive interview questions specifically designed for your target role and industry, ensuring every practice session is relevant and effective.
            </p>
          </div>

          <div className="bg-white/20 backdrop-filter backdrop-blur-lg border border-white/30 rounded-2xl p-6 sm:p-8 text-center shadow-xl transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold text-deep-green mb-3">Learn At Your Own Pace</h3>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              Take control of your learning journey. Practice anytime, anywhere, and revisit concepts until you've mastered them, all on your schedule.
            </p>
          </div>

          <div className="bg-white/20 backdrop-filter backdrop-blur-lg border border-white/30 rounded-2xl p-6 sm:p-8 text-center shadow-xl transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold text-deep-green mb-3">AI Detail Explanation</h3>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              Go beyond simple answers. Our AI provides in-depth explanations, helping you understand the 'why' behind each concept and answer.
            </p>
          </div>
        </div>
      </section>
      <footer
        className="bg-deep-green text-white py-2 sm:py-4 px-4 sm:px-6 lg:px-12 text-center"
        role="contentinfo"
        aria-label="Footer"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-sm sm:text-base mb-2">
            &copy; {new Date().getFullYear()} PrepAI. All rights reserved.
          </p>
          <nav className="flex justify-center space-x-4 sm:space-x-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base">Terms of Service</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base">Contact Us</a>
          </nav>
        </div>
      </footer>
      <LoginModal isOpen={showLoginModal} onClose={closeLoginModal} />
      <SignupModal isOpen={showSignupModal} onClose={closeSignupModal} />
    </div>
  );
}

export default LandingPage;