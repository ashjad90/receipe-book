import React, { forwardRef } from "react";

//Forward cannot have arrow function
const Input = forwardRef(function(props, ref){
    return (
        <input {...props} ref={ref}/>
    );
})

export default Input;