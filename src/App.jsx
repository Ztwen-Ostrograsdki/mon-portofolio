import { useState, memo } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Mon Portfolio</h1>
    </div>
  );
}

export default memo(App);
