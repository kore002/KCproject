import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        main Home
        <div>
          {count}
          <button onClick={() => setCount(count + 1)}>아아아아</button>
        </div>
      </div>
    </>
  );
}

export default Home;
