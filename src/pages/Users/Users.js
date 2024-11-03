import React from 'react';
import Table from '../../components/Tables'; // Pastikan path ini sesuai dengan struktur folder Anda

const Users = () => {
    const users = [
        { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', joined: '2022-01-15', status: 'Active' },
        { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com', joined: '2022-03-22', status: 'Inactive' },
        { id: 3, name: 'Charlie Brown', email: 'charlie.brown@example.com', joined: '2023-05-30', status: 'Active' },
        { id: 4, name: 'Diana Prince', email: 'diana.prince@example.com', joined: '2023-07-12', status: 'Active' },
        { id: 5, name: 'Edward Norton', email: 'edward.norton@example.com', joined: '2021-11-10', status: 'Active' },
        { id: 6, name: 'Fiona Gallagher', email: 'fiona.gallagher@example.com', joined: '2022-02-15', status: 'Inactive' },
        { id: 7, name: 'George Clooney', email: 'george.clooney@example.com', joined: '2022-04-20', status: 'Active' },
        { id: 8, name: 'Hannah Baker', email: 'hannah.baker@example.com', joined: '2023-06-18', status: 'Active' },
        { id: 9, name: 'Ian Malcolm', email: 'ian.malcolm@example.com', joined: '2021-09-30', status: 'Inactive' },
        { id: 10, name: 'Jessica Jones', email: 'jessica.jones@example.com', joined: '2022-05-05', status: 'Active' },
        { id: 11, name: 'Kevin Hart', email: 'kevin.hart@example.com', joined: '2023-01-12', status: 'Active' },
        { id: 12, name: 'Laura Croft', email: 'laura.croft@example.com', joined: '2022-07-25', status: 'Inactive' },
        { id: 13, name: 'Michael Scott', email: 'michael.scott@example.com', joined: '2023-03-15', status: 'Active' },
        { id: 14, name: 'Natalie Portman', email: 'natalie.portman@example.com', joined: '2021-10-22', status: 'Active' },
        { id: 15, name: 'Oscar Isaac', email: 'oscar.isaac@example.com', joined: '2022-08-30', status: 'Inactive' },
        { id: 16, name: 'Peter Parker', email: 'peter.parker@example.com', joined: '2023-02-10', status: 'Active' },
        { id: 17, name: 'Quinn Fabray', email: 'quinn.fabray@example.com', joined: '2021-12-05', status: 'Active' },
        { id: 18, name: 'Rachel Green', email: 'rachel.green@example.com', joined: '2022-06-14', status: 'Inactive' },
        { id: 19, name: 'Steve Rogers', email: 'steve.rogers@example.com', joined: '2023-04-01', status: 'Active' },
        { id: 20, name: 'Tina Fey', email: 'tina.fey@example.com', joined: '2022-09-29', status: 'Active' },
    ];

    const columns = [
        { Header: 'User  ID', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'Joined Date', accessor: 'joined' },
        { Header: 'Status', accessor: 'status' },
    ];

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-6">
                <div className="grid grid-cols-1 ">
                    {/* <Card title="Spent this month" value="$682.5" icon="fa-chart-bar" chart />
                <Card title="New clients" value="321" icon="fa-user" chart />
                <Card title="Earnings" value="$350.40" icon="fa-dollar-sign" />
                <Card title="Activity" value="$540.50" icon="fa-chart-line" chart /> */}
                    <Table transactions={users} columns={columns} title="Users Table"/>
                </div>
            </div>
        </div>
    );
};

export default Users;