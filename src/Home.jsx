import React from "react";


const Home = () => {
  return (
    <>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
          <li data-target="#demo" data-slide-to="3"></li>
          <li data-target="#demo" data-slide-to="4"></li>
          <li data-target="#demo" data-slide-to="5"></li>
          <li data-target="#demo" data-slide-to="6"></li>
          <li data-target="#demo" data-slide-to="7"></li>
          <li data-target="#demo" data-slide-to="8"></li>
          <li data-target="#demo" data-slide-to="9"></li>
          <li data-target="#demo" data-slide-to="10"></li>
          <li data-target="#demo" data-slide-to="11"></li>
        </ul>

    
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="src/images/la.jpg" alt="Los Angeles" width="100%" height='599px'/>
          </div>
          <div className="carousel-item">
            <img src="src/images/ny.jpg" alt="Chicago" width="100%" height="599px" />
          </div>
          <div className="carousel-item">
            <img src="src/images/chicago.jpg" alt="hi" width="100%" height="599px" />
          </div>
          <div className="carousel-item">
            <img src="src/images/butterflies-g0c2cc0607_1280.jpg" alt="you" width="100%" height="599px" />
          </div>
          <div className="carousel-item">
            <img src="src/images/ladybug.jpg" alt="watch" width="100%" height="599px" />
          </div>
          <div className="carousel-item">
            <img src="src/images/chrysanthemum-gd05606dfa_1280.jpg" alt="me" width="100%" height="599px" />
          </div>
          <div className="carousel-item">
            <img src="src/images/flowers-gd02daa5c8_1280.jpg" alt="please" width="100%" height="599px" />
          </div>
          <div className="carousel-item">
            <img src="src/images/lotus-gcffe53a9f_1280.jpg" alt="give" width="100%" height="599px" />
          </div>
          <div className="carousel-item">
            <img src="src/images/marguerite-g7967d9f77_1280.jpg" alt="mem" width="100%" height="599px" />
          </div>
          <div className="carousel-item">
            <img src="src/images/mountain-g9a9337c42_1280.jpg" alt="more" width="100%" height="599px" />
          </div>
          <div className="carousel-item">
            <img src="src/images/pexels-jeswin-thomas-1149405.jpg" alt="advaise" width="100%" height="599px" />
          </div>
          <div className="carousel-item">
            <img src="src/images/sunfla.jpg" alt="advaise" width="100%" height="599px" />
          </div>
        </div>

  
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </>
  );
};

export default Home;
