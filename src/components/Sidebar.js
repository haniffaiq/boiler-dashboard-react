import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation(); // Untuk mendapatkan lokasi saat ini

    return (
        <div className="bg-gray-800 w-64 h-screen p-6 sticky top-0 hidden lg:block shadow-lg">
            <div className="flex items-center mb-8">
                <div className="bg-purple-600 text-white p-3 rounded-full shadow-md">
                    <i className="fas fa-chart-pie"></i>
                </div>
                <h1 className="text-2xl font-bold ml-3 text-white">Dashboard</h1>
            </div>
            <nav>
                <ul>
                    <li className="mb-4">
                        <Link
                            to="/"
                            className={`flex items-center text-gray-300 hover:bg-purple-700 hover:text-white transition duration-200 p-2 rounded-lg border border-transparent hover:border-purple-500 ${location.pathname === '/' ? 'bg-purple-600 text-white border border-purple-500 shadow-lg shadow-purple-500/50' : ''}`}
                        >
                            <i className="fas fa-tachometer-alt mr-3"></i>
                            Dashboard
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link
                            to="/users"
                            className={`flex items-center text-gray-300 hover:bg-purple-700 hover:text-white transition duration-200 p-2 rounded-lg border border-transparent hover:border-purple-500 ${location.pathname === '/users' ? 'bg-purple-600 text-white border border-purple-500 shadow-lg shadow-purple-500/50' : ''}`}
                        >
                            <i className="fas fa-users mr-3"></i>
                            Users
                        </Link>
                    </li>
                    {/* Tambahkan item menu lainnya di sini */}
                </ul>
            </nav>
            <div className="mt-auto">
                <Link
                    to="/logout"
                    className="flex items-center text-gray-300 hover:bg-red-700 hover:text-white transition duration-200 p-2 rounded-lg border border-transparent hover:border-red-500"
                >
                    <i className="fas fa-sign-out-alt mr-3"></i>
                    Log Out
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;