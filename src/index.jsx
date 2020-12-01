import React, { useState } from "react";
import ReactDOM from "react-dom";

/**
 * @description: useState的初始值，只在第一次有效
 */

const Child = ({ data }) => {
  const [count, setCount] = useState(data);
  return (
    <div>
      <div>child</div>
      <div>
        原来的count(初始值不变):{count} --- 新的count(会更新):{data}
      </div>
    </div>
  );
};

const Parent = () => {
  const [data, setCount] = useState(0);
  return (
    <div>
      <div>{data}</div>
      <button onClick={() => setCount(data + 1)}>更新data</button>
      <Child data={data} />
    </div>
  );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<Parent />, mountNode);
