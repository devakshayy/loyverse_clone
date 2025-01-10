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



// JSON SERVER ................????????////////////////////////////////////

const jsonServer = require('json-server');
const multer = require('multer');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
require('dotenv').config(); // For environment variables

// Set default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); // Temporary storage (non-persistent in Glitch)
  },
  filename: function (req, file, cb) {
    let date = new Date();
    let imageFilename = date.getTime() + "_" + file.originalname;
    req.body.imageFilename = imageFilename;
    cb(null, imageFilename);
  },
});

const uploadLimits = {
  fileSize: 5 * 1024 * 1024, // 5MB limit
};
const bodyParser = multer({ storage: storage, limits: uploadLimits }).any();

// Use Multer as middleware
server.use(bodyParser);

// Validation for POST requests for "items"
server.post('/items', (req, res, next) => {
  let date = new Date();
  req.body.createdAt = date.toISOString();

  if (req.body.price) {
    req.body.price = Number(req.body.price);
  }

  let hasErrors = false;
  let errors = {};

  if (String(req.body.code).length !== 4) {
    hasErrors = true;
    errors.code = "The Code must have 4 digits";
  }
  if (String(req.body.barcode).length !== 13) {
    hasErrors = true;
    errors.barcode = "The Barcode must have 13 digits";
  }
  if (req.body.name.length < 2) {
    hasErrors = true;
    errors.name = "The name length should be at least 2 characters";
  }
  if (req.body.price <= 0) {
    hasErrors = true;
    errors.price = "The Price is not valid";
  }
  if (req.body.cost <= 0) {
    hasErrors = true;
    errors.cost = "The Cost is not valid";
  }
  if (req.body.category.length < 2) {
    hasErrors = true;
    errors.category = "The category should be at least 2 characters";
  }
  if (req.body.description.length < 10) {
    hasErrors = true;
    errors.description = "The description length should be at least 10 characters";
  }

  if (hasErrors) {
    // Return bad request (400) with validation errors
    res.status(400).jsonp(errors);
    return;
  }
  // Continue to JSON Server router
  next();
});

// Validation for POST requests for "employees"
server.post('/employees', (req, res, next) => {
  let hasErrors = false;
  let errors = {};

  if (!req.body.name || req.body.name.length < 2) {
    hasErrors = true;
    errors.name = "The name length should be at least 2 characters";
  }
  if (!req.body.email || !/\S+@\S+\.\S+/.test(req.body.email)) {
    hasErrors = true;
    errors.email = "The email is not valid";
  }
  if (!req.body.phone || String(req.body.phone).length !== 10) {
    hasErrors = true;
    errors.phone = "The phone number must be 10 digits";
  }
  if (!req.body.role || req.body.role.length < 3) {
    hasErrors = true;
    errors.role = "The role should be at least 3 characters";
  }
  if (!req.body.poseCode || String(req.body.poseCode).length !== 4) {
    hasErrors = true;
    errors.poseCode = "The pose code must have 4 digits";
  }

  if (hasErrors) {
    // Return bad request (400) with validation errors
    res.status(400).jsonp(errors);
    return;
  }
  // Continue to JSON Server router
  next();
});

// Use default router
server.use(router);
server.listen(process.env.PORT || 4000, () => {
  console.log('JSON Server is running');
});
