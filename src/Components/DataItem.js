import Card from "./Card";

export default function DataItem(props) {
  return (
    <Card>
      <h4>
        Tantárgy: {props.tantargy}
        <br />
        Témakör: {props.temakor}
        <br />
        Feladás dátuma: {props.feladas}
        <br />
        Leadás dátuma: {props.leadas}
        <br />
        Bővebb leírás: {props.leiras}
        <br />
        Típus: {props.tipus}
        <br />
        Kész:
      </h4>
    </Card>
  );
}