import React, { useState } from "react";

const ProductDetails = ({ data }) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Data categories
  const overviewData = {
    Name: data.name,
    Category: data.category,
    Description: data.description,
  };

  const salesInformationData = {
    Price: data.price,
    Cost: data.cost,
    Margin: `${data.margin}%`,
  };

  const historyData = {
    Barcode: data.barcode,
    Code: data.code,
    CreatedAt: data.createdAt,
    ImageFilename: data.imageFilename,
  };

  const renderContent = () => {
    if (activeTab === "overview") {
      return (
        <ul>
          {Object.entries(overviewData).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      );
    } else if (activeTab === "salesInformation") {
      return (
        <ul>
          {Object.entries(salesInformationData).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      );
    } else if (activeTab === "history") {
      return (
        <ul>
          {Object.entries(historyData).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      <div className="tab-navigation">
        <button onClick={() => setActiveTab("overview")}>Overview</button>
        <button onClick={() => setActiveTab("salesInformation")}>
          Sales Information
        </button>
        <button onClick={() => setActiveTab("history")}>History</button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default function App() {
  const productData = {
    id: 1,
    name: "Shirt",
    category: "Fashion",
    description: "This is a shirt",
    price: 700,
    cost: 600,
    code: 3423,
    margin: 10,
    barcode: 534634643,
    createdAt: "2023-07-13",
    imageFilename: "23789034.jpg",
  };

  return (
    <div>
      <h1>Product Details</h1>
      <ProductDetails data={productData} />
    </div>
  );
}
