import React, { useContext } from "react";
import { MyContext } from "../Contexts/MyContext";

function Button(props) {
  const value = useContext(MyContext);
  return (
    <div>
      <button>
        This is button, with {value.light.color}, Your name is {props.name}
      </button>
    </div>
  );
}

export default Button;
