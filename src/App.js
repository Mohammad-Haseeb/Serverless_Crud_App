import "./App.css";
import { Forms } from "./component/forms";
import { DisplayComponents } from "./component/display";
import { Context } from "./GlobalData/DataProvider";
import { useEffect, useState } from "react";

function App() {
  const data = useState([]);
  useEffect(() => {
    (async () => {
      let api = await fetch("/.netlify/functions/data_retrieval");
      let Data = await api.json();
      data[1](Data.message);
      
       
    })();
  }, [data]);
  return (
    <>
      <Context.Provider value={data}>
        <div className="FormStyling">
          <Forms />
        </div>

        {data[0].map((data, ind) => (
          <div key={ind} style={{ marginTop: "15px" }}>
            {" "}
            <DisplayComponents value={data.Name} id={data.id} />
          </div>
        ))}
      </Context.Provider>
    </>
  );
}

export default App;
