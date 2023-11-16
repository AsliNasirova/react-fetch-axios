import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

const Forecast = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const value = "Istanbul";
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
    const datas = async () => {
      try {
        const response = await axios(
          `${baseUrl}appid=4f36a31473ad5d2fea13e240bb79ee98&q=${value}`
        );
        console.log(response);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    datas();
    return () => {
      console.log("Mesaj gonderildi");
    };
  }, [data]);
  console.log(data);

  return (
    <>
      <div>
        {data &&
          data.map((item) => (
            <ul>
              <li>{item.id}</li>
            </ul>
          ))}
      </div>
    </>
  );
};

export default Forecast;
