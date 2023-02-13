import React, { useRef } from "react";

import MyInput from "./MyInput";

const TextInputComponent = () => {

  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (ref.current) ref.current.focus()
  }

  return (
    <form className="mt-6 p-4 flex justify-around">
      <MyInput label="Enter your name: " ref={ref} />
      <button type="button" onClick={handleClick} className="btn">
        Edit
      </button>
    </form>
  )
}

export default TextInputComponent;