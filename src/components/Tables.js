import React from 'react';

const Tables = ({ transactions, columns, title }) => {
    return (
        <div className="bg-gray-800 rounded shadow col-span-1 md:col-span-3">
            <h2 className="text-white">{title}</h2>
            <table className="w-full mt-4 bg-gray-800">
                <thead>
                    <tr className="text-left text-gray-300">
                        {columns.map((column) => (
                            <th key={column.accessor} className="pb-2">
                                {column.Header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-t border-gray-600">
                            {columns.map((column) => (
                                <td key={column.accessor} className="py-2 text-gray-200">
                                    {transaction[column.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <p className="text-gray-400">1-{transactions.length} of {transactions.length}</p>
                <div className="flex items-center">
                    <button className="p-2 bg-gray-600 text-white rounded mr-2">1</button>
                    <button className="p-2 bg-gray-600 text-white rounded mr-2">2</button>
                    <button className="p-2 bg-gray-600 text-white rounded">3</button>
                </div>
            </div>
        </div>
    );
};

export default Tables;