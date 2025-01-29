import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Customers = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCus,setFilteredCus] = useState([]);
  
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
      setSelectedIds(filteredCus.map((filteredCus) => filteredCus.id));
    }
    setSelectAll(!selectAll);
  };

  // const handleDeleteSelected = () => {
  //   setFilteredCus((prev) => prev.filter((filteredCus) => !selectedIds.includes(filteredCus.id)));
  //   setSelectedIds([]);
  //   setSelectAll(false);
  // };
  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) {
      alert("No customers selected to delete.");
      return;
    }
  
    const userChoice = confirm(`Are you sure you want to remove the selected Customers?`);
    
    if (userChoice) {
      Promise.all(
        selectedIds.map((id) =>
          fetch(`http://localhost:4000/customers/${id}`, {
            method: "DELETE",
          })
        )
      )
        .then((responses) => {
          const failedResponses = responses.filter((response) => !response.ok);
  
          if (failedResponses.length > 0) {
            throw new Error("Some deletions failed.");
          } else {
            setFilteredCus((prev) => prev.filter((customer) => !selectedIds.includes(customer.id)));
      
            setSelectedIds([]);
            setSelectAll(false);
            alert("Selected customers removed successfully.");
          }
        })
        .catch(() => {
          alert("Unable to remove some or all customers.");
        });
    }
  };
  

  const getCustomers = () => {
    fetch("http://localhost:4000/customers")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then((data) => {
        setCustomers(data);
      })
      .catch((error) => {
        alert("Unable to get the Customers data!!!");
      });
  };

  useEffect(getCustomers, []);

  const viewHandler = (id) => {
    navigate(`/customers/${id}`);
  };
 
  const handleSearch = (e) => {
     const search = e.target.value;
     setSearch(search);
     const trimmedSearch = search.trim();
     if (!trimmedSearch) return setFilteredCus(customers);
     const filteredCus = customers.filter(customer => 
                       customer.name.toLowerCase().includes(search.toLowerCase())  ||
                       customer.email.toLowerCase().includes(search.toLowerCase()) ||
                       customer.phone.toString().includes(search)
     )
     setFilteredCus(filteredCus)
     
  }
  useEffect(() => {
    setFilteredCus(customers);
  },[customers])
  return (
    <div className="p-4 h-screen w-full  text-white">
      <div className=" flex flex-col justify-between gap-5 pt-[24px] pb-5  bg-white w-full shadow-lg rounded-sm">
        <div className=" px-[30px] flex items-center justify-between ">
          <div>
            <Link
              to="/createcustomer"
              className="py-1 px-2 text-[13px] sm:text-xs font-medium rounded-sm text-white bg-[#8cc748]"
            >
              <button>+ ADD CUSTOMER</button>
            </Link>
            {selectedIds.length > 0 && (
                     <button
                     className="ml-2 py-1 px-2 text-[11px] sm:text-xs font-medium rounded-sm text-white bg-red-500"
                     onClick={handleDeleteSelected}
                   >
                     Delete
                   </button>
            )}
          </div>

          <div>
            <input
              value={search}
              onChange={handleSearch}
              className="outline-none w-[150px] sm:w-[300px] border-b-2 border-gray-800 focus:border-gray-200  text-gray-600 text-sm  px-1"
              placeholder="Search... "
              type="text"
            />
          </div>
        </div>
        <div>
          {/* Table div */}

          <div className="relative w-full overflow-auto ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        checked={selectAll}
                        onChange={handleSelectAll}
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Customers
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contacts
                  </th>
                  <th scope="col" className="px-6 py-3">
                    First Visit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Last Visit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Visit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Spent
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Points Balalnce
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCus.map((customer) => (
                  <tr
                    onClick={() =>viewHandler(customer.id)}
                    key={customer.id}
                    className="bg-white border-b hover:bg-gray-50 cursor-pointer dark:hover:bg-gray-100"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          checked={selectedIds.includes(customer.id)}
                          onChange={() =>handleCheckboxChange(customer.id)}
                          onClick={(e) => e.stopPropagation()}
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {customer.name}
                    </th>
                    <td className="px-6 py-4">
                      <div>
                        <div className="mb-1">{customer.email}</div>
                        <div className="text-gray-500">{customer.phone}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{customer.firstVisit}</td>
                    <td className="px-6 py-4">{customer.lastVisit}</td>
                    <td className="px-6 py-4">{customer.totalVisits}</td>
                    <td className="px-6 py-4">{customer.pointsSpent}</td>
                    <td className="px-6 py-4">{customer.pointsBalance}</td>
                    {/* <td className="px-6 py-4 text-center text-red-500 ">
                      <button>
                        <AiFillDelete />
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          {/* Pagination div */}
          <div className="flex justify-between px-[30px] items-center">
            {/* Add item btn div */}
            <div className="flex items-center">
              <button className="p-3 py-2  text-sm font-medium ring-gray-200 ring-[1px] shadow-gray-900 active:shadow-inner text-gray-900 bg-white">
                <FaAngleLeft />
              </button>
              <button className="px-3 py-2 text-sm font-medium ring-gray-200 ring-[1px] shadow-gray-900 active:shadow-inner text-gray-900 bg-white">
                <FaAngleRight />
              </button>
              <div className="text-gray-900 text-xs flex items-center gap-2 ml-5">
                <div>Page:</div>
                <button className="px-3 py-1 text-sm font-medium ring-gray-200 ring-[1px] shadow-gray-900 active:shadow-inner bg-white">
                  1
                </button>
                <div>of 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
