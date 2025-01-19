import { useState } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Items from "./Page/Items";
import Reports from "./Page/Reports";
import Inventrymanagement from "./Page/Inventrymanagement";
import Employees from "./Page/Employees";
import Customers from "./Page/Customers";
import Integration from "./Page/Integration";
import Settings from "./Page/Settings";
import Help from "./Page/Help";
import Create from "./Page/Create";
import Edit from "./Page/Edit";
import View from "./Page/View";
import Login from "./Page/Login";
import CreateEmployee from "./Page/CreateEmployee";
import CustomerView from "./Page/CustomerView";
import CreateCustomer from "./Page/CreateCustomer";
import CustomerEdit from "./Page/CustomerEdit";

function App() {
  // const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // const ProtectedRoute = ({ isAuthenticated, children }) => {
  //   return isAuthenticated ? navigate("/")  : children ;
  // };

  return (
  <>
    <Routes>
      <Route/>
    </Routes>
    <div className="flex flex-col h-screen overflow-hidden">
      <Header openToggle={openToggle} className="fixed top-0 left-0 w-full z-50" />

      <div className="flex flex-1 mt-[55px]"> 
        {/* Sidebar */}
        <SideBar
          isSidebarOpen={isSidebarOpen}
        />
           
        {/* Page Content */}
        <div
          className={`flex-1 text-black bg-[#ebebeb] overflow-y-auto transition-all duration-300 ${
            isSidebarOpen ?  "ml-[300px]" : "ml-[70px]"
          }`}
        >
          <Routes>
            {/* <Route path="/" element={ <ProtectedRoute isAuthenticated={false}><Login/></ProtectedRoute> }/> */}
            <Route path="/" element={<Items />} />
            <Route path="/items" element={<Items />} />
            <Route path="/create" element={ <Create/> } />
            <Route path="/createemployee" element={ <CreateEmployee/> } />
            <Route path="/employees" element={<Employees/> } />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/view/:id" element={ <View/> } />
            <Route path="/reports" element={<Reports />} />
            <Route path="/inventrymanagement" element={ <Inventrymanagement/> } />
            <Route path="/employees" element={ <Employees/> } />
            <Route path="/customers" element={ <Customers/> } />
            <Route path="/createcustomer" element={ <CreateCustomer/> }/>
            <Route path="/editcustomer/:cusid" element={ <CustomerEdit/> } />
            <Route path="/customers/:cusid" element={ <CustomerView/> } />
            <Route path="/integrations" element={ <Integration/> } />
            <Route path="/settings" element={ <Settings/> } />
            <Route path="/help" element={ <Help/> } /> 
          </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

