import React, { useState } from "react";

function Button({ name }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="text-center my-3">
      <h3>Hola, {name}</h3>
      <button
        className={`btn ${isOn ? "btn-success" : "btn-danger"}`}
        onClick={() => setIsOn(!isOn)}
      >
        {isOn ? "Encendido" : "Apagado"}
      </button>
    </div>
  );
}

export default Button;
