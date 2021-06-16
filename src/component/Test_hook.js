import React, { useRef } from 'react';
import { useState } from 'react';

function Page() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h3>Test</h3>
      <hr />
      <p>You clicked {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>
        Click me
      </button>
    </div>
  );
}
export default Page;
