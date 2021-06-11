import React from "react";

export default function Item({ item }) {
  
  return (
    <div className="item">
      <p className="item-header">{item.bairro}</p>
    </div>
  );
}
