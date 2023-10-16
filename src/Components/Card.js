import classes from "./Style.module.css"

export default function Card(props) 
{
  return <div className={classes.Card}>{props.children}</div>;
}
