import { useRef } from "react";
import classes from "./Style.module.css";
import Card from "./Card";

export default function AddNewHazifeladat(props) {
  const tantargy = useRef();
  const temakor = useRef();
  const feladas = useRef();
  const leadas = useRef();
  const leiras = useRef();
  const tipus = useRef();

  function formHandler(e) {
    e.preventDefault();
  }

  function submitHandler() {
    const actualData = {
      id: Math.round(Math.random() * 10),
      tantargy: tantargy.current.value,
      temakor: temakor.current.value,
      feladas: feladas.current.value,
      leadas: leadas.current.value,
      leiras: leiras.current.value,
      tipus: tipus.current.value
    };

    props.onSaveHandler(actualData);
  }

  return (
    <Card className={classes.card}>
        <h1>Új házifeladat felvétele</h1>
        <hr />

        <form>
          <label className={classes.tantargy}>Tantárgy:</label>
          <label className={classes.feladas}>Feladás napja:</label> <br />

          <input className={classes.tantargyInput} type="text" placeholder="Tantárgy"></input>
          <input className={classes.feladasInput} type="date"></input>
          <input className={classes.bovebbLeiras} type="text" placeholder="Bővebb leírás..."></input>

          <br />

          <label className={classes.tantargy}>Témakör:</label>
          <label className={classes.feladas}>Leadás napja:</label> <br />

          <input className={classes.tantargyInput} type="text" placeholder="Témakör"></input>
          <input className={classes.leadasInput} type="date"></input>

          <br />


        </form>
    </Card>
  );
}
