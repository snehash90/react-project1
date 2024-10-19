import React from "react";

// declearing variable in props btnText
function Card({btnText="Visit Me"}) {
   return(
    // inject variable
    <button type="button">{btnText}</button>
   )
}
export default Card;