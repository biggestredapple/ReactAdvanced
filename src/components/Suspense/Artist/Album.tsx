import { useState } from "react"

const Artist = () => {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <div>
        <h1>Album</h1>
      </div>
    )
  } else {
    return (
      <button onClick={() => setShow(true)}>
        Open The Beatles article page
      </button>
    )
  }
}