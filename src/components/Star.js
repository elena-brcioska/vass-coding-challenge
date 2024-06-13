import React from "react";

const Star = ({
  value,
  setUserRating,
  userRating,
  setHoverRating,
  hoverRating,
}) => {
  const handleClick = () => {
    setUserRating(value);
    console.log(value);
  };

  const handleMouseEnter = () => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const fill =
    hoverRating >= value || (!hoverRating && userRating >= value)
      ? "#FFB400"
      : "#808080";

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <label htmlFor={value}>
        <svg
          width="38"
          height="42"
          viewBox="0 0 38 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6923 32.0283L26.8146 29.5849L30.2081 42L18.6923 32.0283ZM37.3846 15.9811H23.0872L18.6923 0L14.2974 15.9811H0L11.5714 25.8868L7.17651 41.8679L18.7479 31.9623L25.8688 25.8868L37.3846 15.9811Z"
            fill={fill}
          />
        </svg>
      </label>

      
      {/* <input
        id={value - 0.5}
        name="rating"
        type="radio"
        value={value - 0.5}
        checked={userRating === value}
        readOnly
        style={{ display: "block" }}
        onClick={(e) => console.log(e.target.value) }
      /> */}

      <input
        id={value}
        name="rating"
        type="radio"
        value={value}
        checked={userRating === value}
        readOnly
        style={{ display: "none" }}
      />

    </div>
  );
};

export default Star;
