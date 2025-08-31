const CardComponent = ({ targetRole, yearsOfExperience, topicsToFocusOn, description }) => {
  // Function to get initials for the small white box in the header
  const getInitials = (role) => {
    if (!role) return '';
    return role.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  // Split topics string into an array for display
  const topicsArray = topicsToFocusOn ? topicsToFocusOn.split(' ') : [];

  // Predefined light gradient classes for dynamic header background
  const gradients = [
    'bg-gradient-to-r from-blue-100 to-blue-200',
    'bg-gradient-to-r from-green-100 to-green-200',
    'bg-gradient-to-r from-yellow-100 to-yellow-200',
    'bg-gradient-to-r from-purple-100 to-purple-200',
    'bg-gradient-to-r from-pink-100 to-pink-200',
    'bg-gradient-to-r from-indigo-100 to-indigo-200',
    'bg-gradient-to-r from-red-100 to-red-200',
  ];

  // Simple hash function to pick a gradient based on the target role
  const getGradient = (role) => {
    let hash = 0;
    if (role.length === 0) return gradients[0]; // Default if role is empty
    for (let i = 0; i < role.length; i++) {
      hash = role.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash % gradients.length);
    return gradients[index];
  };

  const headerGradient = getGradient(targetRole);

  // Get current date for "last updated" pill
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-gray-100">
      {/* Card Header */}
      <div className={`flex items-center p-4 sm:p-5 ${headerGradient}`}> {/* Dynamic gradient background */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md flex items-center justify-center text-deep-green text-sm sm:text-base font-bold mr-3 sm:mr-4 shadow-sm flex-shrink-0">
          {getInitials(targetRole)}
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">
            {targetRole}
          </h3>
          {topicsArray.length > 0 && (
            <p className="text-sm text-gray-600 mt-1">
              {topicsArray.join(', ')}
            </p>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {yearsOfExperience && (
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Experience: {yearsOfExperience} years
            </span>
          )}
          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
            10 Q&A
          </span> {/* Hardcoded 10 Q&A as per example */}
          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Last updated: {lastUpdatedDate}
          </span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;