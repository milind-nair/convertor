import React, { useState } from "react";

export default function TextArea(props) {
  const [dec, setDec] = useState(0);
  const [bin, setBin] = useState(0);
  const [oct, setOct] = useState(0);
  const [hex, setHex] = useState(0);

  const decIn = (e) => {
    const d = parseInt(e.target.value);
    setDec(d);
    setBin(d.toString(2));
    setOct(parseInt(d.toString(8)));
    setHex(d.toString(16));
  };
  const binIn = (e) => {
    const d = parseInt(e.target.value);
    setBin(d);
    setDec(parseInt(d, 2));
    setOct(parseInt(d, 2).toString(8));
    setHex(parseInt(d, 2).toString(16));
  };
  const octIn = (e) => {
    const d = parseInt(e.target.value);
    setOct(d);
    setDec(parseInt(d, 8));
    setBin(parseInt(d, 8).toString(2));
    setHex(parseInt(d, 8).toString(16));
  };
  const hexIn = (e) => {
    const d = parseInt(e.target.value);
    setHex(d);
    setDec(parseInt(d, 16));
    setBin(parseInt(d, 16).toString(2));
    setOct(parseInt(d, 16).toString(8));
  };

  return (
    <div
      className={`container text-${props.mode === "light" ? "dark" : "light"}`}
    >
      <div className="row mt-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          <h4>Decimal</h4>
        </label>
        <div className="mb-4 col-md-11">
          <input
            value={dec}
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={decIn}
          />
        </div>
        <div className="col-md-1">
          <button
            type="button"
            className={`btn btn-${props.mode === "light" ? "dark" : "light"}`}
            onClick={() => navigator.clipboard.writeText(dec)}
          >
            Copy
          </button>
        </div>
      </div>

      <div className="row mt-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">
         <h4>Binary</h4>
        </label>
        <div className="mb-4 col-md-11">
          <input
            value={bin}
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={binIn}
          />
        </div>
        <div className="col-md-1">
          <button
            type="button"
            className={`btn btn-${props.mode === "light" ? "dark" : "light"}`}
            onClick={() => navigator.clipboard.writeText(bin)}
          >
            Copy
          </button>
        </div>
      </div>

      <div className="row mt-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">
        <h4>Octal</h4>
        </label>
        <div className="mb-4 col-md-11">
          <input
            value={oct}
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={octIn}
          />
        </div>
        <div className="col-md-1">
          <button
            type="button"
            className={`btn btn-${props.mode === "light" ? "dark" : "light"}`}
            onClick={() => navigator.clipboard.writeText(oct)}
          >
            Copy
          </button>
        </div>
      </div>

      <div className="row mt-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">
        <h4>Hexadecimal</h4>
        </label>
        <div className="mb-4 col-md-11">
          <input
            value={hex}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={hexIn}
          />
        </div>
        <div className="col-md-1">
          <button
            type="button"
            className={`btn btn-${props.mode === "light" ? "dark" : "light"}`}
            onClick={() => navigator.clipboard.writeText(hex)}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
