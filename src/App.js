import React from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Loading from "./components/Loading";
import Card from "./components/Card";

function App() {
  const url = "https://course-api.com/react-tabs-project";
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);

  const getData = async () => {
    await fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          isLoading(false);

          throw new Error(resp.statusText);
        }
      })
      .then((dataBits) => {
        setData(dataBits);
        isLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);
  return <div className="container">{loading ? <Loading /> : <Card obj={data} />}</div>;
}

export default App;
