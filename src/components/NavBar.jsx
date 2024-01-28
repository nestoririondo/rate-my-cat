import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { FaStar } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const hadleClick = (e) => {
    if (e.target.innerText === "Rate") {
      navigate("/rate");
    } else if (e.target.innerText === "Scoreboard") {
      navigate("/scores");
    } else if (e.target.innerText === "About") {
      navigate("/about");
    }
  }

  return (
    <nav className="nav-bar">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={(e)=>hadleClick(e)} label="Rate" icon={<FaStar />} />
        <BottomNavigationAction onClick={(e)=>hadleClick(e)} label="Scoreboard" icon={<FaTrophy />} />
        <BottomNavigationAction onClick={(e)=>hadleClick(e)} label="About" icon={<FaQuestionCircle />} />
      </BottomNavigation>
    </nav>
  );
};

export default NavBar;
