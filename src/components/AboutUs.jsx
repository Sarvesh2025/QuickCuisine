import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const food = "https://foodfire-app.netlify.app/burger-image.ec55d069.png";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="about-container-main">
      <div className="about-profile-container flex justify-center items-center">
        {/* used ternary condition to Show my profile and Hide my Profile and using nested routing */}
        {show ? (
          <>
            <Link to={"/about"}>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      </div>
      <div className="about-container bg-gray-100 p-8 flex justify-between items-center">
        <div className="about-left">
          <h1 className="text-7xl mb-7">
                      Welcome to <br /> The world of <br />
                   
            <span className="text-blue-500 text-5xl">Tasty & Fresh Food</span>
          </h1>
          <h4 className="text-3xl">
            "Better you will feel if you eat a Food
            <span className="text-blue-500">Fire</span> healthy meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={food} alt="Food Image" className="w-64 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
