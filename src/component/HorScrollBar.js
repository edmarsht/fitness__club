import React from "react";

function HorScrollBar({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default HorScrollBar;
