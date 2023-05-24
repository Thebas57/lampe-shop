import React from "react";

const Lampes = ({ selectedLampe, onChange }) => {
  const lampes = {
    0: {
      material: "Copper",
      dim: "H 33 x W 15 x D 15",
      weight: "2,5 kg",
      elec: "LED 10W | G9 | 220-240V | 50 Hz",
    },
    1: {
      material: "Metal",
      dim: "H 45 x W 12 x D 12",
      weight: "2,4 kg",
      elec: "LED 10W | G9 | 220-240V | 50 Hz",
    },
    2: {
      material: "Iron",
      dim: "H 50 x W 17 x D 17",
      weight: "10 kg",
      elec: "LED 12W | G9 | 220-240V | 50 Hz",
    },
  };

  return (
    <div>
      <h1>Choisissez une option :</h1>
      <div>
        <button onClick={() => onChange(0)}>Option 1</button>
        <button onClick={() => onChange(1)}>Option 2</button>
      </div>
      <p>Vous avez choisi : {lampes[selectedLampe].material}</p>
    </div>
  );
};

export default Lampes;
