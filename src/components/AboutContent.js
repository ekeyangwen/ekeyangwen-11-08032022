import React from "react";
import { useState, useEffect } from "react";

const AboutContent = () => {
  const [data, setData] = useState([]);

  const getDropdownData = () => {
    fetch("../../../dropdownData.json")
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
        console.log(data);
      });
  };

  useEffect(() => {
    getDropdownData();
  }, []);

  return (
    <div className="about">
      {data.map((about) => (
        <>
          {" "}
          <details>
            <summary>
              {" "}
              <div className="titleAbout"> {about.title}</div>{" "}
              <button className="dropdownBtn">
                <img src="../../../img/Vector-bas.png" alt="Fleche bas" />
              </button>{" "}
            </summary>
            <p className="aboutContent">{about.content}</p>{" "}
          </details>
        </>
      ))}
    </div>
  );
};

export default AboutContent;
