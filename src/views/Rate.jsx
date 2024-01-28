import { useState, useEffect } from "react";
import { SERVER } from "../constants/server";
import { CAT_API } from "../constants/catapi";
import axios from "axios";
import Stars from "../components/Stars";
import "../styles/Rate.css";

const fetchCat = async (setCat, setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await axios.get(CAT_API);
    setCat(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

const sendRating = async (rating, id, setError) => {
  try {
    const response = await axios.post(`${SERVER}/rate`, {
      image_id: id,
      value: rating,
    });
    console.log(response);
  } catch (error) {
    setError(error);
  }
};

const Rate = () => {
  const [cat, setCat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cat && cat.length > 0 && rating > 0) {
      sendRating(rating, cat[0].id, setError);
    }
    fetchCat(setCat, setIsLoading);
  }, [rating]);

  return (
    <div className="body">
      <div className="rate">
        <h1>🐱</h1>
        <div className="cat-img-container">
          {cat && <img className="cat-img" src={cat[0].url} alt={cat[0].id} />}
        </div>
        {isLoading && <p className="loading">Loading...</p>}
        <Stars setRating={setRating} />
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
};

export default Rate;
