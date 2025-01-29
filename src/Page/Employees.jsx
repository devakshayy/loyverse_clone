import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { AiOutlineDelete,AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Employees = () => {
  
  const [employees, setEmployees] = useState([]);
  const [searchEmployee, setSearchEmployee] = useState("");
  const [filteredEmployee, setFilteredEmployee] = useState([])

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
      setSelectedIds(filteredEmployee.map((employee) => employee.id));
    }
    setSelectAll(!selectAll);
  };

  // const handleDeleteSelected = () => {
  //   setEmployees((prev) => prev.filter((employee) => !selectedIds.includes(employee.id)));
  //   setSelectedIds([]);
  //   setSelectAll(false);
  // };

  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) {
      alert("No customers selected to delete.");
      return;
    }
  
    const userChoice = confirm(`Are you sure you want to remove the selected Employee?`);
    
    if (userChoice) {
      Promise.all(
        selectedIds.map((id) =>
          fetch(`http://localhost:4000/employees/${id}`, {
            method: "DELETE",
          })
        )
      )
        .then((responses) => {
          const failedResponses = responses.filter((response) => !response.ok);
  
          if (failedResponses.length > 0) {
            throw new Error("Some deletions failed.");
          } else {
            setFilteredEmployee((prev) => prev.filter((employee) => !selectedIds.includes(employee.id)));
      
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
  

  
  const getEmployees = () => {
     fetch("http://localhost:4000/employees")
     .then(response => {
         if(response.ok){
            return response.json();
         }
         throw new Error();
     })
     .then(data => {
        setEmployees(data);
     })
     .catch(error => {
        alert("Unable to get Employees data")
     })
  }

  useEffect(getEmployees,[])

  const handleDelete = (id,name) => {
    const EmployeeName = name.toUpperCase();
    const userChoice = confirm(`Are you sure you want to Remove "${EmployeeName}"`);
    if (!userChoice) {
        return
     } else {
     fetch("http://localhost:4000/employees/"+ id,{
      method: "DELETE",
     })
     .then(response => {
       if(!response.ok){
        throw new Error()
       }
       getEmployees()
     })
     .catch(error => {
       alert("Unable to Delete employee")
     })}
  }  

  const handleSearch = (e) => {
      const searchEmployee = e.target.value;
      setSearchEmployee(searchEmployee)
      const filteredEmployee = employees.filter(employee => 
                                                  employee.name.toLowerCase().includes(searchEmployee.toLowerCase()) ||
                                                  employee.phone.toString().includes(searchEmployee.toLowerCase()) ||
                                                  employee.role.toLowerCase().includes(searchEmployee.toLowerCase()));
      setFilteredEmployee(filteredEmployee);  
  }

  useEffect(() => {
    setFilteredEmployee(employees)
  },[employees])
  
  return (
    <div className="p-4 h-screen w-full  text-white">
      <div className=" flex flex-col justify-between gap-5 pt-[24px] pb-5  bg-white w-full shadow-lg rounded-sm">
        <div className=" px-[30px] flex items-center justify-between ">
          
          <div>
            <Link
              to="/createemployee"
              className="py-1 px-1  text-[13px] sm:text-xs font-medium rounded-sm text-white bg-[#8cc748]"
            >
             <button>+ ADD EMPLOYEE</button>
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
              value={searchEmployee}
              onChange={handleSearch}
              className="outline-none border-b-2 w-[120px] border-gray-800 focus:border-gray-200  text-gray-600 text-sm  px-1"
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
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                     Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployee.map((employee,idx) => (
                      <tr key={idx} className="bg-white border-b hover:bg-gray-50 cursor-pointer dark:hover:bg-gray-100">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                             checked={selectedIds.includes(employee.id)}
                             onChange={() => handleCheckboxChange(employee.id)}
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
                        {employee.name}
                      </th>
                      <td className="px-6 py-4">{employee.email}</td>
                      <td className="px-6 py-4">{employee.phone}</td>
                      <td className="px-6 py-4">{employee.role}</td>
                      <td className="px-6 py-4 text-center text-red-500 " >
                        <button onClick={() => handleDelete(employee.id,employee.name)}><AiFillDelete /></button>
                      </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          {/* Pagination div */}
          <div className="flex justify-between px-[30px] items-center">
            {" "}
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

export default Employees;
