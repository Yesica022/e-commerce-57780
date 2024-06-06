// ProfileCard.js

import React from 'react';

export default function ProfileCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/150"
        alt="Profile"
      />
      <div className="pt-4 pb-2">
        <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
        <p className="text-gray-700">Software Engineer</p>
      </div>
      <div className="pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Follow
        </button>
      </div>
    </div>
  );
}
