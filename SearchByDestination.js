// src/components/SearchByDestination.js

import React, { useState } from 'react';
import tourPackages from './UserTourTable';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { tourPackages } from './UserTourTable'; // adjust path based on folder structure


const SearchByDestination = () => {
  const [query, setQuery] = useState("");

  const filteredPackages = tourPackages.filter(pkg =>
    pkg.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Search Tours by Destination</h2>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Enter destination (e.g., Goa, Manali)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="row">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow" style={{ border: 'none' }}>
                <img
                  src={pkg.image}
                  alt={pkg.location}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{pkg.location}</h5>
                  <p>{pkg.days} Days • ₹{pkg.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No tours found for "{query}"</p>
        )}
      </div>
    </div>
  );
};

export default SearchByDestination;
