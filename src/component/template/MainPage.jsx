import { useState } from "react";
import Button from "../assets/Button";
function MainPage() {
  const [count, setCount] = useState(0);
  function OnOff() {
    console.log("asdfsdsds");
    setCount(count + 1);
  }
  return (
    <>
      <div>
        main
        <div>
          {count}
          {/* <button onClick={() => setCount(count + 1)}>아아아아</button> */}
          <Button name="가나다" action={OnOff} />
        </div>
      </div>
    </>
  );
}

export default MainPage;
