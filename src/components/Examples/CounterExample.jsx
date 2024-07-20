import { useEffect, useState } from "react";

const CounterExample = () => {
  const [count, setCount] = useState(1);

  const handleClickButtonAdd = () => {
    setCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    const buttonAdd = document.getElementById("buttonAdd");
    buttonAdd.addEventListener("click", handleClickButtonAdd);

    return () => {
      buttonAdd.removeEventListener("click", handleClickButtonAdd);
    };
  }, []);

  return (
    <div>
      <p>Valor: {count}</p>
      <button id="buttonAdd">+</button>
    </div>
  );
};

export default CounterExample;
