import React, { useState, memo } from "react";
import { useEffect } from "react";

export default function () {
  // const [initCount, setInitCount] = useState(Math.floor(Math.random() * 100));

  // const onReset = () => {
  //   setInitCount(Math.floor(Math.random() * 100));
  // };

  return (
    <div style={{ marginTop: 100, marginBottom: 100 }}>
      <CountDown />
    </div>
  );
}

const CountDown = memo(({ initCount = 0, onReset }) => {
  const [count, setCount] = useState(initCount);

  useEffect(() => {
    if (count !== parseInt(count)) {
      setCount(Math.floor(count * 1000));
    }
  }, [count]);

  // useEffect(() => {
  //   setCount(initCount);
  // }, [initCount]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [count]);

  console.log("re-render");

  return (
    <div style={{ fontSize: 50 }}>
      <button onClick={() => setCount(Math.random())}>Random</button>
      {count}
    </div>
  );
});
