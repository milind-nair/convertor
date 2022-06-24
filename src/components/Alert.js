import React from "react";

function Alert(props) {
  return (
    props.msg && (
      <div
        className="alert alert-success d-flex align-items-center"
        role="alert"
      >
        <div>
          {props.msg.type.toUpperCase()} : {props.msg.text}
        </div>
      </div>
    )
  );
}

export default Alert;
