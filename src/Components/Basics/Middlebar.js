import React from "react";
// const breakPoints=[
//   { width:1, itemsToShow: 1},
//   { width:550, itemsToShow: 2},
//   { width:768, itemsToShow: 3},
//   { width:1200, itemsToShow: 4},

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
        <div className="storybox-container-content">
          <div className="storybox-container">
            <div className="Storybox">
              <i class="fas fa-search addstories vaag"></i>
            </div>

          </div>

        </div>
        {/* <div className="App">
          <Carousel breakPoints={breakPoints}>
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
            <Item>Four</Item>
            <Item>Five</Item>
            <Item>Six</Item>
            <Item>Seven</Item>
            <Item>Eight</Item>
          </Carousel>
        </div> */}
      </div>
      <div className="poststatus-container-content">
        <div className="poststatus-container">
          <div className="poststatus">
            <img className="poststatusphoto" src="../Images/User.jpeg"></img>
          </div>
          <div className="poststatus1">
            <input
              type="text"
              placeholder="What's on your mind, Ashmina?"
              className="statusinput"
            ></input>
          </div>
        </div>
        <hr className="statushr" />
        <div className="postvideo-container-content">
          <div className="postvideo-container">
            <div className="postvideo">
              <i class="fa-solid fa-video livevideo"></i>
              <h5 className="livevidos">Live Video</h5>
            </div>
            <div className="postvideo1">
            <i class="fa-solid fa-image statusimage"></i>
              <h5 className="livevidos">Live Video</h5>
            </div>
            <div className="postvideo2">
            <i class="fa-regular fa-face-smile smiley"></i>
              <h5 className="livevidos">Live Video</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="newsfeed-container-content">
          <div className="newsfeed-container">
            <div className="newsfeed">
             <h3>Hi</h3>
            </div>

          </div>

        </div>
    </>
  );
};

export default Middlebar;
