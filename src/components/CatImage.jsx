import { CAT_API_IMG } from "../constants/catapi";
import { useState } from "react";

const CatImage = ({ catid }) => {
  const [format, setFormat] = useState("jpg");

  const onError = () => {
    if (format === "jpg") {
      setFormat("gif");
    } else if (format === "gif") {
      setFormat("png");
    } else {
      setFormat("jpg");
    }
  };

  return (
    <img
      className="cat-img"
      src={`${CAT_API_IMG}/${catid}.${format}`}
      onError={onError}
    />
  );
};

export default CatImage;
