import React, { forwardRef } from "react";

function Input({ label, required, placeholder, type = "text", ...props }, ref) {
  return (
    <label>
      <p>
        {label}
        {required}
      </p>
      <input ref={ref} type={type} placeholder={placeholder} {...props} />
    </label>
  );
}
export default forwardRef(Input);
