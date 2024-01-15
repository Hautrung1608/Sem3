import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

 
const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  // useEffect(() => {
  //   setPrevLocation(location.state.data);
  // }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      
    </div>
  );
};

export default About;
