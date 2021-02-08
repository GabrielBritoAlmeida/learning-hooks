import Header from "../../components/Header";
import Title from "../../components/Title";

import { useUnload } from "../../hooks/useUnload";

function HookClickOutside() {
  useUnload((e) => {
    e.preventDefault();
    const exit = window.confirm("Are you sure you want to leave?");
    if (exit) window.close();
  });

  return (
    <>
      <Header />
      <Title />
      <div
        className="click-box"
        style={{
          border: "2px dashed orangered",
          height: 200,
          width: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Close HookOnload</p>
      </div>
    </>
  );
}

export default HookClickOutside;
