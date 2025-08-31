import React, { useState, useRef } from 'react'; // Removed useEffect as it's no longer needed for click outside
import Button from '../button/Button'; // Assuming Button.js is in components/button/Button.js

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // dropdownRef is no longer strictly necessary for click outside, but kept for potential future use or clarity
  const dropdownRef = useRef(null);

  // Dummy user data (replace with actual user data from context/props later)
  const user = {
    name: 'John Doe',
    profilePic: 'https://placehold.co/28x28/FFD700/0A4A3B?text=JD',
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-4 sm:px-6 lg:px-10 py-1.5 sm:py-2 bg-deep-green text-white z-50 shadow-md">
      {/* Left: Brand Logo */}
      <h1 className="text-base sm:text-lg lg:text-xl font-bold font-sans tracking-tight">
        PrepAI
      </h1>

      {/* Right: Profile Section with Dropdown */}
      <div className="flex items-center gap-2 relative" ref={dropdownRef}>
        {/* Profile Info (clickable to toggle dropdown) */}
        <div
          className="flex items-center gap-1.5 cursor-pointer p-1 rounded-full hover:bg-white/10 transition-colors duration-200"
          onClick={toggleDropdown} // This will now be the only way to close the dropdown as well
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-7 h-7 rounded-full border-2 border-white object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/28x28/FFD700/0A4A3B?text=P" }}
          />
          <span className="hidden sm:inline text-xs font-medium">{user.name}</span>
          {/* Dropdown arrow icon */}
          <svg
            className={`w-2.5 h-2.5 ml-0.5 transform transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-1 w-36 bg-white rounded-lg shadow-xl py-0.5 z-30 animate-fade-in-down">
            <a
              href="#"
              className="block px-2.5 py-1 text-gray-800 hover:bg-gray-100 transition-colors duration-200 text-xs"
              onClick={() => {
                console.log('Edit Profile clicked');
                setIsDropdownOpen(false); // Close dropdown after clicking an item
              }}
            >
              Edit Profile
            </a>
            <a
              href="#"
              className="block px-2.5 py-1 text-red-600 hover:bg-red-50 transition-colors duration-200 text-xs"
              onClick={() => {
                console.log('Logout clicked');
                setIsDropdownOpen(false); // Close dropdown after clicking an item
              }}
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;