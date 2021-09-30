import React from 'react';
import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const Spinner = () => {
  return (
    <div>
      <Loader
        type="Hearts"
        color="#B22206"
        height={150}
        width={150}
        timeout={3000} 
      />
    </div>
  );
};

export default Spinner;
