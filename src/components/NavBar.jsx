import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { FaStar } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import "../styles/NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const handleClick = (value) => {
    if (value === "Rate") {
      navigate("/");
    } else if (value === "Scoreboard") {
      navigate("/scores");
    } else if (value === "About") {
      navigate("/about");
    }
  };

  return (
    <nav className="nav-bar">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleClick(newValue);
        }}
      >
        <BottomNavigationAction 
          label="Rate" 
          value="Rate" 
          icon={<FaStar />} 
        />
        <BottomNavigationAction
          label="Scoreboard"
          value="Scoreboard"
          icon={<FaTrophy />}
        />
        <BottomNavigationAction
          label="About"
          value="About"
          icon={<FaQuestionCircle />}
        />
      </BottomNavigation>
    </nav>
  );
};

export default NavBar;
