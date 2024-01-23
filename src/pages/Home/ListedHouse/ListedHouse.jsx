import React from "react";

const ListedHouse = () => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Cozy Apartment in the City Center</h2>
          <p>A comfortable and modern apartment located in the heart of the city.</p>
          <div className="card-actions">
            <button className="btn btn-primary">See more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedHouse;
