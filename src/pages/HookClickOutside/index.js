import { useRef } from "react";

import Header from "../../components/Header";
import Title from "../../components/Title";

import { useClickOutside } from "../../hooks/useClickOutside";

function HookClickOutside() {
  const clickRef = useRef();
  useClickOutside(clickRef, () => alert("Do you want to leave?"));

  return (
    <>
      <Header />
      <Title />
      <div
        className="click-box"
        ref={clickRef}
        style={{
          border: "2px dashed orangered",
          height: 200,
          width: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Click out of this element</p>
      </div>
    </>
  );
}

export default HookClickOutside;
