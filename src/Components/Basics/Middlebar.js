import React from "react";
// const breakPoints=[
//   { width:1, itemsToShow: 1},
//   { width:550, itemsToShow: 2},
//   { width:768, itemsToShow: 3},
//   { width:1200, itemsToShow: 4},

const Middlebar = () => {
  return (
    <>
      <section className="middlesquad">
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
          {/* <div className="storybox-container-content">
          <div className="storybox-container">
            <div className="Storybox">
              <i class="fas fa-search addstories vaag"></i>
            </div>
          </div>
        </div> */}
        </div>
        <div className="poststatus-container-content">
          <div className="poststatus-container">
            <div className="poststatus">
              <img
                className="poststatusphoto"
                src="../Images/User.jpeg"
                alt=""
              ></img>
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
                <h5 className="livevidos">Photo/Video</h5>
              </div>
              <div className="postvideo2">
                <i class="fa-regular fa-face-smile smiley"></i>
                <h5 className="livevidos">Feeling/Activity</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="newsfeed-container-content">
          <div className="newsfeed-container">
            <div className="newsfeed">
              <img src="../Images/photo.jpeg" className="photoqu"></img>
              {/* <h5 className="mq">Movie Quote</h5> */}
            </div>
            <div className="newsfeed1">
              <span className="mq">Movie Quote</span>
              {/* <br /> */}
              <div>
                <span className="date">1d.</span>
                <i className="fas fa-earth"></i>
              </div>
            </div>

            <div className="newsfeed3">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div className="newsfeed4">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>

          <div className="images-container-content">
            <div className="images-container">
              <img src="../Images/care.jpeg" className="care" alt=""></img>
            </div>
            <div className="react-container-content">
              <div className="react-container">
                <img src="../Images/react.png" className="reactp"></img>
              </div>
              <div className="react-container2">
                <span className="likes">15k</span>
              </div>
              <div className="react-container3">
                <span className="com">362 comments</span>
              </div>
              <div className="react-container4">
                <span className="shares">7.7k shares</span>
              </div>
            </div>
            <hr className="likeshr" />
            <div className="likecomsh-container-content">
              <div className="likecomsh-container">
                <img className="likebtn" src="../Images/likes.png"></img>
              </div>
              <div className="likecomsh-container1">
                <span>Like</span>
              </div>
              <div className="likecomsh-container2">
                <img className="cmtbtn" src="../Images/comments.png"></img>
              </div>
              <div className="likecomsh-container3">
                <span>comment</span>
              </div>
              <div className="likecomsh-container4">
                <img className="shabtn" src="../Images/shares.png"></img>
              </div>
              <div className="likecomsh-container5">
                <span>Share</span>
              </div>
            </div>
          </div>
        </div>

        

        
      </section>
    </>
  );
};

export default Middlebar;
