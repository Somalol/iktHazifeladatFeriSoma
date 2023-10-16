import { useRef } from "react";
import classes from "./Style.module.css";
import Card from "./Card";

export default function AddNewHazifeladat(props) {
  const orszag = useRef();
  const varos = useRef();
  const datum = useRef();
  const transzport = useRef();
  const prio = useRef();
  const kep = useRef();

  function formHandler(e) {
    e.preventDefault();
  }

  function submitHandler() {
    const actualData = {
      id: Math.round(Math.random() * 10),
      orszag: orszag.current.value,
      varos: varos.current.value,
      datum: datum.current.value,
      transzport: transzport.current.value,
      prio: prio.current.value,
      kep: kep.current.value
    };

    props.onSaveHandler(actualData);
  }

  return (
    <Card className={classes.card}>
        <form onSubmit={formHandler}>
            <label>Ország: </label>
            <input type="text" placeholder="Ország" id="orszag" ref={orszag} />

            <br />
            <br />

            <label>Város: </label>
            <input type="text" placeholder="Város" id="varos" ref={varos} />

            <br />
            <br />

            <label>Dátum: </label>
            <input type="date" id="datum" ref={datum} />

            <br />
            <br />

            <label>Transzport: </label>
            <select ref={transzport}>
            <option value="auto">Autó</option>
            <option value="hajo">Hajó</option>
            <option value="repcsi">Repülő</option>
            <option value="vonat">Vonat</option>
            </select>

            <br />
            <br />

            <label>Prioritás: </label>
            <select ref={prio}>
            <option value="alacsony">Alacsony</option>
            <option value="kozepes">Közepes</option>
            <option value="magas">Magas</option>
            </select>

            <br />
            <br />

            <label>Kép (link): </label>
            <input type="text" placeholder="Link" id="kep" ref={kep} />

            <br />
            <br />

            <input type="submit" id="gomb" value="Mentés" onClick={submitHandler} />
        </form>
    </Card>
  );
}
