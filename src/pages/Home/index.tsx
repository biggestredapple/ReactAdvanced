import React from "react";
import { Link } from "react-router-dom"

const HomeComponent = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl text-center font-bold">Advanced React</h1>
      <ul className="list-disc">
        <li>
          <Link to="/lazy">Lazy Loading</Link>
        </li>
        <li>
          <Link to="/debouncing">Debouncing</Link>
        </li>
      </ul>
      <div>
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  )
}

export default HomeComponent;