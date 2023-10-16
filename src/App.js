import './App.css';
import Calendar from './Components/Calendar';
import AddNewHazifeladat from './Components/AddNewHazifeladat';
import { useCallback, useState, useEffect } from "react";
import classes from "./Components/Style.module.css";

export default function App() 
{
  const [data, setData] = useState([]);

  function saveData(enteredNewData) {
    fetch(
      "https://react-feri-soma-default-rtdb.europe-west1.firebasedatabase.app/felvettHazik.json",
      {
        method: "POST",
        body: JSON.stringify(enteredNewData),
        headers: { "Content-Type": "application/json" }
      }
    );

    setData((prevData) => {
      return [enteredNewData, ...prevData];
    });
  }

  const listHazifeladat = useCallback(async () => {
    try {
      const response = await fetch(
        "https://react-feri-soma-default-rtdb.europe-west1.firebasedatabase.app/felvettHazik.json"
      );

      if (!response.ok) {
        throw new Error("Valami baj van!");
      }

      const dataList = await response.json();

      const list = [];
      for (const key in dataList) {
        const aData = {
          id: key,
          ...dataList[key]
        };
        list.push(aData);
      }
      setData(list);
    } catch (error) {
      throw new Error(error);
    }
  });

  useEffect(() => {
    listHazifeladat();
  }, [listHazifeladat, data]);

  return (
    <div>
      <AddNewHazifeladat onSaveHandler={saveData} />
    </div>
  );
}
