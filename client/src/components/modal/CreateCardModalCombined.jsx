import { useState } from 'react';
import Button from '../button/Button'; // Import your Button component

const CreateCardModalCombined = ({ isOpen, onClose, onCreateCard }) => {
  const [formData, setFormData] = useState({
    targetRole: '',
    yearsOfExperience: '',
    topicsToFocusOn: '',
    description: '',
  });

  // Don't render anything if the modal is not open
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateCard(formData); // Pass the form data up to the parent component
    setFormData({ // Reset form after submission
      targetRole: '',
      yearsOfExperience: '',
      topicsToFocusOn: '',
      description: '',
    });
    onClose(); // Close the modal
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100]" // Modal backdrop
      onClick={onClose} // Close modal when clicking on the backdrop
    >
      <div
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl transform transition-all duration-300 animate-scale-in" // Removed opacity-0 here
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-deep-green">Start your interview journey</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-3xl leading-none"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="targetRole" className="block text-gray-700 text-sm font-semibold mb-1">
              Target Role
            </label>
            <input
              type="text"
              id="targetRole"
              name="targetRole"
              value={formData.targetRole}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="e.g., Frontend Developer"
              required
            />
          </div>

          <div>
            <label htmlFor="yearsOfExperience" className="block text-gray-700 text-sm font-semibold mb-1">
              Years of Experience
            </label>
            <input
              type="text"
              id="yearsOfExperience"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="e.g., 3-5 years"
              required
            />
          </div>

          <div>
            <label htmlFor="topicsToFocusOn" className="block text-gray-700 text-sm font-semibold mb-1">
              Topics to Focus On
            </label>
            <input
              type="text"
              id="topicsToFocusOn"
              name="topicsToFocusOn"
              value={formData.topicsToFocusOn}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="e.g., React JavaScript Redux"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Separate topics with spaces.</p>
          </div>

          <div>
            <label htmlFor="description" className="block text-gray-700 text-sm font-semibold mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-y"
              placeholder="e.g., Cover all the basic questions..."
              required
            ></textarea>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" type="button" onClick={onClose} className="px-5 py-2 text-sm">
              Cancel
            </Button>
            <Button variant="solid" type="submit" className="px-5 py-2 text-sm">
              Create Card
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCardModalCombined;