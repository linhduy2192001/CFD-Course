import styled from "styled-components";
import React, { forwardRef } from "react";

const ErrorText = styled.p`
  width: 100% !important;
  padding-left: 200px;
  color: red;
`;

const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  input {
    flex: 1;
  }
`;

function Input(
  { error, label, required, placeholder, type = "text", ...props },
  ref
) {
  return (
    <>
      <Label>
        <p>
          {label}
          {required}
        </p>
        <input ref={ref} type={type} placeholder={placeholder} {...props} />
        {error && <ErrorText className="error-text">{error}</ErrorText>}
      </Label>
    </>
  );
}
export default forwardRef(Input);
