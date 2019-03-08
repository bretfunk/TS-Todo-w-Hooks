import React, { useState } from "react";
import { listenerCount } from "cluster";

export const Input = (props: any) => {
  const [value, setValue] = useState("");
  return (
    <div className="p-4">
      <form
        onSubmit={e => {
          e.preventDefault();
          const newList = [...props.list, value];
          props.setList(newList);
          setValue("");
        }}
      >
        <input
          style={{ width: "50%"}}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="btn btn-sm btn-primary ml-4">Submit</button>
      </form>
    </div>
  );
};
