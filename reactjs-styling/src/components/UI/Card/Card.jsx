import "./Card.module.css";

function Card(props) {
  //allow the styles to apply to our custom Card contanier
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
