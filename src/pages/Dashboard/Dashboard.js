import React from 'react';
import Card from '../../components/Card';
// import Users from '../Users/Users'

const Dashboard = () => (
    <div className="bg-gray-900 min-h-screen p-6">
        <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    <Card title="Spent this month" value="$682.5" icon="fa-chart-bar" chart />
                    <Card title="New clients" value="321" icon="fa-user" chart />
                    <Card title="Earnings" value="$350.40" icon="fa-dollar-sign" />
                    <Card title="Activity" value="$540.50" icon="fa-chart-line" chart />
                    {/* <Users /> */}
                </div>
            </div>
        </div>
    </div>
);

export default Dashboard;