import React from 'react';

const Header = () => (
    <div className="flex justify-between items-center p-6 bg-gray-900 shadow-lg border-b border-transparent hover:border-purple-500 transition duration-200">
        <div className="flex items-center">
            <input 
                type="text" 
                placeholder="Search" 
                className="p-2 rounded border border-gray-700 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
        </div>
        <div className="flex items-center">
            <i className="fas fa-globe mr-6 text-purple-500 hover:text-white transition duration-200"></i>
            <i className="fas fa-bell mr-6 text-purple-500 hover:text-white transition duration-200"></i>
            <img src="https://placehold.co/40x40" alt="User  avatar" className="rounded-full border border-purple-500" />
        </div>
    </div>
);

export default Header;