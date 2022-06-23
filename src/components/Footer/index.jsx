import React, { useEffect, useState } from "react";
import './styles.css'

const FooterComponent = () => {
  const [year, setYear] = useState(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer>
      <h3>{year}</h3>
    </footer>
  );
};

export default FooterComponent;
