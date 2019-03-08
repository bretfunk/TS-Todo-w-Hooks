import React, { useState } from "react";
import { Input } from "./components/Input";
import { List } from "./components/List";

const App = (props: any) => {
  const [list, setList] = useState([
    "Build TS todo app with hooks",
    "Profit!!"
  ]);
  return (
    <div className="container bg-light">
      <div className="text-center">
        <h1>TS Todo with Hooks</h1>
      </div>
      <div className="text-center">
        <Input setList={setList} list={list} />
      </div>
      <div className="justify-content-center">
        <List setList={setList} list={list} />
      </div>
    </div>
  );
};

export default App;
