import React from "react";
import BodyParts from "./BodyParts";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


function HorScrollBar({ data, setBodyPart, bodyPart }) {
  return (
    <div className="horscrollbar">

    <ScrollMenu>
      {data.map((item) => (
        <div
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
        >
          <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </div>
      ))}
    </ScrollMenu>
    </div>
  );
}

export default HorScrollBar;
