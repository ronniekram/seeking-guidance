import React from 'react';
import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Loading spinner is functional, but limited customization -- will find better package later!


const Spinner = () => {
  return (
    <div>
      <Loader
        type="Oval"
        color="#B22206"
        secondaryColor="#F4D35E"
        height={150}
        width={150}
      />
    </div>
  );
};

export default Spinner;

// Bars might be okay
// Circles might be okay
// Oval good
// Puff maybe?
// Kind of like Rings
// ThreeDots

// secondaryColor="#EE964B"