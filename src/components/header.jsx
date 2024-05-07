import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [signin, setSignin] = useState("Login");
  const handleClick = () => {
    if (signin === "Login") {
      setSignin("Logout ");
    }
    else setSignin("Login")
   }
  return (
    <div className="flex bg-white-400 justify-between border-4 shadow-lg z-999  box-shadow: -2px 7px 5px -6px rgba(0, 0, 0, 0.61)">
      <img
        src="https://imgs.search.brave.com/T32Szx7fqM32RyYtUWeZUQiO8rkmRZJn-3lgdykklyY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzE0MTg0/MTcvc2NyZWVuc2hv/dHMvNDIwNDcxMC9t/ZWRpYS8wMTdhOWVk/MTQwODdmMDU1MTA0/NDZmYTQxZTI3MDE5/My5qcGc_cmVzaXpl/PTQwMHgw"
        alt="logo"
        width={100}
      ></img>
      <ul className="flex items-center justify-between">
        <Link className="px-8" to="/">
          <li>Home</li>
        </Link>
        <Link className="px-8" to="/about">
          <li>About Us</li>
        </Link>
        <Link className="px-8" to="/contact">
          <li>Contact Us</li>
        </Link>
        <Link className="px-8">
          <li>Cart</li>
        </Link>
        <Link className="px-8 mr-8" to="/login">
          <button onClick={handleClick}>{signin} </button>
        </Link>
      </ul>
    </div>
  );
}
export default Header;



