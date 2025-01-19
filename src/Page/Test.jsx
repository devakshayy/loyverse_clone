import React, { useState } from 'react';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Akshay', email: 'akshay@gmail.com', phone: '9048887162', role: 'Manager' },
    { id: 2, name: 'Amal', email: 'amal@gmail.com', phone: '8848106318', role: 'Sales Staff' },
    { id: 3, name: 'Ayyoob', email: 'ayyoob@gamil.com', phone: '8834406318', role: 'Sales Associa' },
    { id: 4, name: 'Avaneeth', email: 'avaneeth@gmail.com', phone: '8606918275', role: 'Cashier' },
    { id: 5, name: 'Adarsh', email: 'adardh@gmail.com', phone: '3454769797', role: 'Administrator' },
  ]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      setSelectedIds(employees.map((employee) => employee.id));
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteSelected = () => {
    setEmployees((prev) => prev.filter((employee) => !selectedIds.includes(employee.id)));
    setSelectedIds([]);
    setSelectAll(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <button style={{ background: 'green', color: 'white', padding: '10px' }}>+ ADD EMPLOYEE</button>
        {selectedIds.length > 0 && (
          <button
            style={{ background: 'red', color: 'white', padding: '10px' }}
            onClick={handleDeleteSelected}
          >
            Delete Selected
          </button>
        )}
      </div>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ROLE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(employee.id)}
                  onChange={() => handleCheckboxChange(employee.id)}
                />
              </td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.role}</td>
              <td>
                <button
                  style={{ background: 'red', color: 'white' }}
                  onClick={() =>
                    setEmployees((prev) =>
                      prev.filter((item) => item.id !== employee.id)
                    )
                  }
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;

// Example Usage
const App = () => {
  const customers = [
    {
      id: 1,
      name: 'Anu',
      email: 'anu@gmail.com',
      phone: '9054432365',
      address: 'tirur',
    },
    {
      id: 2,
      name: 'Lekshaya',
      email: 'lekshya@gmail.com',
      phone: '3245678990',
      address: 'tirur',
    },
    {
      id: 3,
      name: 'Akshay',
      email: 'akshay@gmail.com',
      phone: '0978563432',
      address: 'Tirur',
    },
  ];

  return <CustomersTable customers={customers} />;
};

export default App;






const currentDate = new Date().toISOString();           //   current date and firstvist condition initailisation
      const isFirstVisit = !customer.firstVisit;

      customer.lastVisit = currentDate;
      customer.firstVisit = isFirstVisit ? currentDate : customer.firstVisit,
      customer.totalVisits = 1;





      const response = await fetch("http://localhost:4000/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      });













import { useState, useEffect } from "react";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  return (
    <div>
      {/* Render your customer table */}
    </div>
  );
}


const handleVisit = async (customer) => {
  const currentDate = new Date().toISOString();
  const isFirstVisit = !customer.firstVisit;

  const updatedCustomer = {
    ...customer,
    firstVisit: isFirstVisit ? currentDate : customer.firstVisit,
    lastVisit: currentDate,
    totalVisits: customer.totalVisits + 1,
  };

  await fetch(`http://localhost:3000/customers/${customer.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCustomer),
  });

  // Update the local state
  setCustomers((prevCustomers) =>
    prevCustomers.map((c) =>
      c.id === customer.id ? updatedCustomer : c
    )
  );
};


<button onClick={() => handleVisit(customer)}>Track Visit</button>









