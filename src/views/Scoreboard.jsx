import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER } from "../constants/server";
import CatImage from "../components/CatImage";
import "../styles/Scoreboard.css";

const fetchRates = async (setRates, setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await axios.get(`${SERVER}/rate`);
    setRates(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

const Scoreboard = () => {
  const [rates, setRates] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRates(setRates, setIsLoading);
  }, []);

  return (
    <div className="body">
      <div className="scoreboard">
        <h1>🏆</h1>
        {isLoading && <p className="loading">Loading...</p>}
        {rates &&
          rates.map((score, index) => (
            <div className="cat-card" key={score.catimageid}>
              <CatImage catid={score.catimageid} />
              <p className="position">{index + 1}</p>
              <p className="hearts">❤️ {score.totalscore}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Scoreboard;
