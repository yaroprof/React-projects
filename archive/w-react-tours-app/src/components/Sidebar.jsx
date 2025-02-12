import React from 'react';

const Sidebar = ({ updateTours }) => {
  return (
    <div className="w-1/5 bg-gray-200 text-gray-800 px-4 py-6">
      {/* Social */}
      <div className="mb-8">
        <h4 className="text-xl font-bold mb-4">Share</h4>
        <ul className="pl-4">
          <li className="mb-2">Instagram</li>
          <li className="mb-2">Facebook</li>
          <li className="mb-2">Lin</li>
        </ul>
      </div>
      {/* Sorting */}
      <div className="">wasd
        <h4 className="text-xl font-bold mb-4">Sort by:</h4>
        <ul className="pl-4">
          <li className="mb-2">place</li>
          <li className="mb-2">price</li>
          <li className="mb-2">#</li>
        </ul>
      </div>
      {/* Update button */}
      <button
        onClick={updateTours}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
        Update tours
      </button>

      {/* Toggle menu */}
      <div className="toggle-menu">
        <ul className="pl-4">
          <li className="mb-2">Instagram</li>
          <li className="mb-2">Facebook</li>
          <li className="mb-2">Lin</li>
        </ul>
        <div className="">
        <h4 className="text-xl font-bold mb-4">Sort by:</h4>
        <ul className="pl-4">
          <li className="mb-2">place</li>
          <li className="mb-2">price</li>
          <li className="mb-2">#</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
