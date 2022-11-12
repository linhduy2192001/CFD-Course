import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingRoot = styled.div`
  min-height: 100vh;
  background: white;
  display: flex;
  align-item: center;
  justify-content: center;
  position: fixed;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100000;
`;

export default function PageLoading() {
  return (
    <LoadingRoot>
      <CircularProgress />
    </LoadingRoot>
  );
}
