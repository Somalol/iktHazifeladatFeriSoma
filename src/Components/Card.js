import classes from "./Style.module.css";
import { useCallback, useState, useEffect } from "react";
import DataList from "./DataList";

export default function Card(props) 
{
  const [data, setData] = useState([]);

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

  let currentDate = new Date().toJSON().slice(0, 10);

  if(props.leadas == currentDate)
  {
    return <div className={classes.warning}>{props.children}</div>;
  }
  else if(props.leadas > currentDate)
  {
    return <div className={classes.pending}>{props.children}</div>;
  }
  else if(props.leadas < currentDate)
  {
    return <div className={classes.expired}>{props.children}</div>;
  }



  return <div className={classes.card}>{props.children}</div>;
}
