import React from "react";
import { Link } from "react-router-dom";

import { TextInputComponent, PlayVideoComponent } from "../../components/ForwardingRef";

const ForwardingRefPage = () => {
  return (
    <div className="container flex-col justify-center mx-auto px-4 py-4 mt-6">
      <Link to="/" className="btn absolute">Back</Link>
      <div className="flex justify-center">
        <h1 className="flex text-4xl text-center font-bold">Forwarding Ref</h1>
      </div>
      <div className="flex mt-6">
        <div className="flex-col justify-center">
          <h2 className="text-2xl text-center">Focusing a text input </h2>
          <p className="text-lg p-4 italic text-justify">
            Clicking the button will focus the input.
            The Form component defines a ref and passes it to the MyInput component.
            The MyInput component fowards that ref to the browser &lt;input&gt;.
            This lets the Form component focus the &lt;input&gt;.
          </p>
          <TextInputComponent />
        </div>
        <div className="flex-col justify-ceter">
          <h2 className="text-2xl text-center">Playing and pausing a video</h2>
          <p className="text-lg p-4 italic text-justify">
            Clicking the button will call play() and pause() on a &lt;video&gt; DOM node.
            The App component defines a ref and passes it to the MyVideoPlayer component.
            The MyVideoPlayer component forwards that ref to the browser &lt;video&gt; node.
            This lets the App component play and pause the &lt;video&gt;.
          </p>
          <PlayVideoComponent />
        </div>
      </div>
    </div>
  )
}

export default ForwardingRefPage;