import InputPersisted from "../../components/InputPersisted";
import Header from "../../components/Header";
import Title from "../../components/Title";

const HookPersisted = () => {
  return (
    <>
      <Header />
      <Title />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <InputPersisted name="@myinput" />
        <br />
      </div>
    </>
  );
};

export default HookPersisted;
