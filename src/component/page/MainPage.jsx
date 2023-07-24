import { useState } from "react";

function MainPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        main
        <div>
          {count}
          <button onClick={setCount(count + 1)}></button>
        </div>
      </div>
    </>
  );
}

export default MainPage;
