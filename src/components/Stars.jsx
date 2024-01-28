import Rating from "@mui/material/Rating";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Stars = ({ setRating, isSubmitting }) => {
  const handleRate = (e) => {
    setRating(Number(e.target.value));
  };

  return (
    <div className="stars">
      <Rating
        name="simple-controlled"
        value={Number(0)}
        onClick={(e) => {
          handleRate(e);
        }}
        size="large"
        icon={<FaHeart color="rgb(255, 121, 121)" fontSize="3rem" />}
        emptyIcon={<FaRegHeart fontSize="3rem" />}
        // disabled={isSubmitting}
      />
    </div>
  );
};

export default Stars;
