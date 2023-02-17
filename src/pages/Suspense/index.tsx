import React from "react";
import { Link } from "react-router-dom";


const SuspensePage = () => {
  return (
    <div className="container flex-col justify-center mx-auto px-4 py-4 mt-6">
      <Link to="/" className="btn absolute">Back</Link>
      <div className="flex justify-center">
        <h1 className="flex text-4xl text-center font-bold">Suspense</h1>
      </div>
      <div className="flex mt-6">
        <div className="flex-col justify-center">
          <h2 className="text-2xl text-center">Displaying a fallback while content is loading </h2>
          <p className="text-lg p-4 italic text-justify">
            React will display your loading fallback until all the code and data needed by the children has been loaded.
            In the example below, the Albums component suspends while fetching the list of albums. Until it’s ready to render,
            React switches the closest Suspense boundary above to show the fallback—your Loading component.
            Then, when the data loads, React hides the Loading fallback and renders the Albums component with data.
          </p>
        </div>
        <div className="flex-col justify-ceter">
          <h2 className="text-2xl text-center">Revealing content together at once</h2>
          <p className="text-lg p-4 italic text-justify">
            By default, the whole tree inside Suspense is treated as a single unit.
            For example, even if only one of these components suspends waiting for some data,
            all of them together will be replaced by the loading indicator:
            Then, after all of them are ready to be displayed, they will all appear together at once.
            In the example below, both Biography and Albums fetch some data.
            However, because they are grouped under a single Suspense boundary,
            these components always “pop in” together at the same time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SuspensePage;