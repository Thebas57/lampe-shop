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
    <div className="lampes-container">
      <ul>
        <li><span>Matérial : </span>{lampes[selectedLampe].material}</li>
        <li><span>Dimensions (cm) : <br /></span>{lampes[selectedLampe].dim}</li>
        <li><span>Net Weight : </span>{lampes[selectedLampe].weight}</li>
        <li><span>Electrification : <br /></span>{lampes[selectedLampe].elec}</li>
      </ul>
      <img src="./lampe1.png" alt="lampe" />
    </div>
  );
};

export default Lampes;
