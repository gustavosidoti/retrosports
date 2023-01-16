import styles from "./button.module.css";
import { useState } from "react";

function Button(props) {
  const [colorButton, setColorButton] = useState(props.color);

  const styleBtn = { backgroundColor: colorButton };

  function changeColor() {
    setColorButton("red");
  }

  return (
    <button onClick={props.onButtonTouch} 
            style={styleBtn} 
            className={styles.btn}
            disabled={(props.stock == 0)}>
      {props.children || props.text}
    </button>
  );
}

export default Button;