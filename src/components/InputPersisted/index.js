import { usePersistedState } from "../../hooks/usePersistedState";

const MyComponent = ({ name }) => {
  const [val, setVal] = usePersistedState(name, "");
  return (
    <input
      value={val}
      onChange={(e) => {
        setVal(e.target.value);
      }}
    />
  );
};

export default MyComponent;
