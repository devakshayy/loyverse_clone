import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const params = useParams()
  
  const [initialData, setInitialData] = useState({})
  const [activeTab ,setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Sales Information", "History"];   //for out tab buttons repeataions 


   function getItems () {
         fetch("http://localhost:4000/items/" + params.id)
         .then(response => {
            if(response.ok) {
                 return response.json()
            }
            throw new Error()
         })
         .then(data => {
           setInitialData(data)
         })
         .catch(error => {
            alert("Unable to read the product details")
         })
    }
  
  useEffect(getItems,[])
   

  const overviewData = {
    Code: initialData.code,
    Barcode: initialData.barcode,
    Name: initialData.name,
    Category: initialData.category,
    Description: initialData.description
  };

  const salesInformationData = {
    Price: initialData.price,
    Cost: initialData.cost,
    // Margin: `${data.margin}%`,
  };

  const historyData = {
    CreatedAt: initialData.createdAt
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
                     <div key={key}>{value.slice(0,10)}</div>
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