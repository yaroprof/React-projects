import React from 'react';

const UpdateToursButton = ({updateTours}) => {
  return (
    <button
      onClick={updateTours}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      update tours
    </button>
  );
};

export default UpdateToursButton;
