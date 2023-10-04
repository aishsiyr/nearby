import React from 'react';

const ModalComponent = ({ data, selectedTitle, closeModal }) => {
  const selectedData = data.data[selectedTitle];

  return (
    <div className="inset-0 z-50 bg-white">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* ... (the rest of your modal code) */}
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          {/* Business Name */}
          <h3 className="text-xl font-semibold mb-2">{selectedData.name}</h3>

          {/* Business Location */}
          <p className="text-gray-600 mb-4">
            {selectedData.district}, {selectedData.street_address}
          </p>

          {/* Phone Number */}
          <p className="text-gray-600 mb-4">
            📞 {selectedData.phone_number}
          </p>

          {/* Business Status */}
          <p className="text-green-500 font-semibold mb-4">
            {selectedData.business_status}
          </p>

          {/* Business Rating */}
          <div className="text-yellow-400 mb-4">
            Rating: {selectedData.rating}
          </div>

          {/* Website Link */}
          <a
            href={selectedData.website}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          {/* Close Button */}
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
