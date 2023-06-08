import React from "react";

const Choose = ({ selectedLampe, onChange }) => {
    console.log(selectedLampe)
  return (
    <div className="choose">
      <div className={selectedLampe === 0 ? "active" : ""} onClick={(e) => onChange(0)}>
        <img src="/lampe1.png" alt="lampe1" />
      </div>

      <div className={selectedLampe === 2 ? "active" : ""} onClick={(e) => onChange(2)}>
        <img src="/lampe3.png" alt="lampe3" />
      </div>
      <div className={selectedLampe === 1 ? "active" : ""} onClick={(e) => onChange(1)}>
        <img src="/lampe2.png" alt="lampe2" />
      </div>
    </div>
  );
};

export default Choose;
