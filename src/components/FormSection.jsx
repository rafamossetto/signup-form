import React from "react";
import FormComponent from "./FormComponent";

const FormSection = () => {
  return (
    <div className="space-y-4">
      <p className="bg-prim-blue text-white py-4 px-3 text-center rounded-lg shadow-lg">
        <span className="font-bold"> Try it free 7 days </span>
        then $20/mo. thereafter
      </p>
      <FormComponent />
    </div>
  );
};

export default FormSection;
