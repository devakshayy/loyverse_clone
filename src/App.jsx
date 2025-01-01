import { useState } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { Route, Routes } from "react-router-dom";
import Items from "./Page/Items";
import Reports from "./Page/Reports";
import Inventrymanagement from "./Page/Inventrymanagement";
import Employees from "./Page/Employees";
import Customers from "./Page/Customers";
import Integration from "./Page/Integration";
import Settings from "./Page/Settings";
import Help from "./Page/Help";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
     
      <Header openToggle={openToggle} className="fixed top-0 left-0 w-full z-50" />

      <div className="flex flex-1 mt-[40px]"> 
        {/* Sidebar */}
        <SideBar
          isSidebarOpen={isSidebarOpen}
        />

        {/* Page Content */}
        <div
          className={`flex-1 text-white bg-[#ebebeb] overflow-y-auto transition-all duration-300 ${
            isSidebarOpen ?  "ml-[300px]" : "ml-[70px]"
          }`}
        >
          <Routes>
            <Route path="/items" element={<Items />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/inventrymanagement" element={ <Inventrymanagement/> } />
            <Route path="/employees" element={ <Employees/> } />
            <Route path="/customers" element={ <Customers/> } />
            <Route path="/integrations" element={ <Integration/> } />
            <Route path="/settings" element={ <Settings/> } />
            <Route path="/help" element={ <Help/> } /> 
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

