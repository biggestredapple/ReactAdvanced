import React from "react";
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="container flex-col justify-center mx-auto px-4 py-4 mt-6">
      <div className="flex justify-center">
        <h1 className="flex text-6xl text-center font-bold">Advanced React</h1>
      </div>
      <div className="flex justify-center mt-5">
        <ul className="list-disc">
          <li className="text-2xl my-5">
            <Link to="/errorboundary">Error boundary</Link>
          </li>
          <li className="text-2xl my-5">
            <Link to="/lazy">Lazy Loading</Link>
          </li>
          <li className="text-2xl my-5">
            <Link to="/debouncing">Debouncing</Link>
          </li>
          <li className="text-2xl my-5">
            <Link to="/forwardingref">Forwarding Ref</Link>
          </li>
          <li className="text-2xl my-5">
            <Link to="/portal">Portal</Link>
          </li>
          <li className="text-2xl my-5">
            <Link to="/suspense">Suspense</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center py-4 px-4">
        <button className="btn btn-blue">Prev</button>
        <button className="btn btn-blue ml-4">Next</button>
      </div>
    </div>
  )
}

export default HomePage;