import React, { useState } from "react";

export const List = (props: any) => {
  const toDelete = (e: any) => {
    const deletedItem = e.target.parentElement.innerText
      .replace("Delete", "")
      .trim();
    const filteredList = props.list.filter(
      (item: string) => item !== deletedItem
    );
    props.setList(filteredList);
  };
  return (
    <ul>
      {props.list.map((item: string, i: number) => (
        <li key={i} className="p-1">
          {item}
          <button
            className="btn btn-sm btn-danger ml-4"
            onClick={e => toDelete(e)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
