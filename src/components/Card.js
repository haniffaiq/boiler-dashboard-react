import React from 'react';

const Card = ({ title, value, icon, chart }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-transparent hover:border-purple-500 transition duration-200">
        <div className="flex justify-between items-center mb-4">
            <div>
                <h2 className="text-gray-300">{title}</h2>
                <p className="text-3xl font-bold text-white">{value}</p>
            </div>
            <div className="text-purple-500 text-4xl">
                <i className={`fas ${icon}`}></i>
            </div>
        </div>
        {chart && <div className="h-16 bg-gray-700 rounded"></div>}
    </div>
);

export default Card;