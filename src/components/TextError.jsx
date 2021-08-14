import React from "react";

const TextError = (props) => {
  return (
    <p className=" text-prim-red text-right italic text-sm  ">
      {props.children}
    </p>
  );
};

export default TextError;
