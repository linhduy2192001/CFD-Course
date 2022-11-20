import React, { useEffect, useImperativeHandle, useState } from "react";
import { forwardRef } from "react";

function Count(props, ref) {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (isRunning) {
        setCount(count + 1);
      }
    }, 1000);
  }, [count, isRunning]);
  useImperativeHandle(
    ref,
    () => {
      return {
        stop() {
          setIsRunning(false);
        },
        resume() {
          setIsRunning(true);
        },
      };
    },
    []
  );

  return <div>{count}</div>;
}
export default forwardRef(Count);
