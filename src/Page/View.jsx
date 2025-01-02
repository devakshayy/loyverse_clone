import React, { useState } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const params = useParams()
  
  const [activeTab ,setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Sales Information", "History"];   //for out tab buttons repeataions 

  const overviewData = {
    Code: "1234",
    Barcode: "3257980965",
    Name: "Laptop",
    Category: "Electronics",
    // ImageFilename: data.imageFilename,
    Description: "This is a Laptop"
  };

  const salesInformationData = {
    Price: "1000",
    Cost: "800",
    // Margin: `${data.margin}%`,
  };

  const historyData = {
    CreatedAt: "1/1/2025",
  };

  const renderContent = () => {

    if(activeTab === "Overview"){
        return (
            <div  className="flex flex-col">
                <div>
                  <div className="w-2/4 flex justify-between">
                  
                    {/* first div */}
                    <div className=" text-[#7c8291] text-xs w-1/4 flex flex-col gap-4">
                     {Object.entries(overviewData).map(([key]) => (
                             <div key={key}>Item {key}</div>
                     ))}
                    </div>
                    <div className="text-xs w-2/4 flex flex-col gap-4">
                      {Object.entries(overviewData).map(([key,value]) => (
                         <div key={key}>{value}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
        );
    }else if (activeTab === "Sales Information") {
        return (
            <div  className="flex flex-col">
                <div>
                  <div className="w-2/4 flex justify-between">
                  
                    {/* first div */}
                    <div className=" text-[#7c8291] text-xs w-1/4 flex flex-col gap-4">
                     {Object.entries(salesInformationData).map(([key]) => (
                             <div key={key}>Item {key}</div>
                     ))}
                    </div>
                    <div className="text-xs w-2/4 flex flex-col gap-4">
                      {Object.entries(salesInformationData).map(([key,value]) => (
                         <div key={key}>{value}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
        );
    }else if (activeTab === "History") {
        return (
            <div  className="flex flex-col">
            <div>
              <div className="w-2/4 flex justify-between">
              
                {/* first div */}
                <div className=" text-[#7c8291] text-xs w-1/4 flex flex-col gap-4">
                 {Object.entries(historyData).map(([key]) => (
                         <div key={key}>Item {key}</div>
                 ))}
                </div>
                <div className="text-xs w-2/4 flex flex-col gap-4">
                  {Object.entries(historyData).map(([key,value]) => (
                     <div key={key}>{value}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
    }
  }



  return (
    <div className="h-full bg-[#f9f9fb] text-gray-900">
      <div className="bg-[#f9f9fb]  text-lg justify-center flex flex-col pb-10 px-4 gap-8">
        <div className=" flex flex-col">
          <div className="font-meadium pb-2">item name</div>

          <div className="flex border-b-gray-800 gap-2">
             {tabs.map((tab) => (
                  <button
                  onClick={() => setActiveTab(tab)}
                  key={tab}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === tab
                      ? "border-b-2 border-blue-500 "
                      : "text-gray-500 hover:text-blue-500"
                  }`}
                >
                 {tab}
                </button>
             ))}
          </div>
          <div className="py-4">
             {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;


// {tabs.map((tab) => (
//     <button
//       onClick={() => setActiveTab(tab)}
//       key={tab}
//       className={`px-4 py-2 text-sm font-medium ${
//        activeTab === tab
//          ? "border-b-2 border-blue-500 "
//          : "text-gray-500 hover:text-blue-500"
//      }`}
//     >
//       {tab}
//     </button>
//   ))}