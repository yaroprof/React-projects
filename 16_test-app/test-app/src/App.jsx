import { useEffect, useState } from "react";
import TreeView from "../components/TreeView"; 

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json") 
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("received dat:", data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Loading error:", error));
  }, []);

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Tree View</h1>
      {loading ? <p>Loaing...</p>: <TreeView data={data} />}
    </div>
  );
};

export default App;
