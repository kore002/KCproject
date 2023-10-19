import { useState } from "react";
import Button from "../assets/Button";
import ASDF from "../../json/asdf.json"

function MainPage() {
  const [count, setCount] = useState(0);
  function OnOff() {
    console.log("asdfsdsds");
    setCount(count + 1);
  }
  const Name = ASDF.name;
  const A = ASDF.A;
  return (
    <>
      <div>
        main
        <div>
          {count}
          {/* <button onClick={() => setCount(count + 1)}>아아아아</button> */}
          <Button name={Name} action={OnOff} />
          <Button name={A} action={OnOff} />
        </div>
      </div>
    </>
  );
}

export default MainPage;
