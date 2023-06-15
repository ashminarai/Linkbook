import React from "react";

const Middlebar = () => {
  return (
    <>
      <div className="middlebar-container-content">
        <div className="middlebar-container">
          <div className="middlebar">
            <i class="fa-solid fa-shield-halved"></i>
            <h3>Stories</h3>
          </div>
          <div className="middlebar1">
          <i class="fa-solid fa-film"></i>
            <h3>Reels</h3>
          </div>
          <div className="middlebar2">
          <i class="fa-solid fa-video"></i>
            <h3>Rooms</h3>
          </div>
        </div>
        <hr className="middlehr" />
        
      </div>
    </>
  );
};

export default Middlebar;
