import "./App.css";
import React, { useEffect, useState } from "react";
import { getLocalStorageData } from "./utils/localStorageUtils";
import { ListManager } from "react-beautiful-dnd-grid";
import Card from "./components/Card";
export default function App() {
  const [data, setData] = useState([]);
  const [loading,setLoading]= useState(false)
  const handleGetData = async () => {
    setLoading(true)
    let data = await getLocalStorageData();
    setLoading(false)
    console.log("data", data);
    if (data) {
      setData(data);
    }
  };
  const sortList = (list) => {
    setLoading(true)
    setData([...list.sort((a, b) => a.position - b.position)]);
    setLoading(false)
  };

  const reorderList = (sourceIndex, destinationIndex) => {
    console.log(sourceIndex, destinationIndex);

    if (destinationIndex === sourceIndex) {
      return;
    }
    const list = data;

    if (destinationIndex === 0) {
      list[sourceIndex].position = list[0].position - 1;
      sortList(list);
      return;
    }

    if (destinationIndex === list.length - 1) {
      list[sourceIndex].position = list[list.length - 1].position + 1;
      sortList(list);
      return;
    }

    if (destinationIndex < sourceIndex) {
      list[sourceIndex].position =
        (list[destinationIndex].position +
          list[destinationIndex - 1].position) /
        2;
      sortList(list);
      return;
    }

    list[sourceIndex].position =
      (list[destinationIndex].position + list[destinationIndex + 1].position) /
      2;
    sortList(list);
  };

  useEffect(() => {
    if (data.length === 0) {
      handleGetData();
    }
  }, [data]);
  return (
    <div className="App">
      {data && data.length > 0 ? (
        <div>
          <ListManager
            items={data}
            direction="horizontal"
            maxItems={3}
            render={(item) => <Card item={item} loading={loading} />}
            onDragEnd={reorderList}
          />
        </div>
      ) : null}
    </div>
  );
}
