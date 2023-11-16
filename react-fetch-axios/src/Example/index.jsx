import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";

function Example() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getProduct = async () => {
    const res = await axios.get("http://localhost:3000/posts");
    setData(res.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <h1>Example</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((x) => (
          <Card{...x}/>
        ))
      )}
    </div>
  );
}

export default Example;
