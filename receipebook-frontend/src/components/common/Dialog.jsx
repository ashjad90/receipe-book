import React, { useEffect, useState } from "react";

function Dialog({setIsOpen}) {
  
  return (
        <dialog open>
          <h2>Dialog Title</h2>
          <p>This is the content of the dialog box.</p>
          <button onClick={()=>setIsOpen(false)}>Close</button>
        </dialog>
    
  );
}

export default Dialog;
