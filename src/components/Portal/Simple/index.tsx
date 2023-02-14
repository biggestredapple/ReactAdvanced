
import { createPortal } from "react-dom";

const SimpleComponent = () => {

  return (
    <div className="flex mt-6 justify-center item-center border rounded">
      <p>This child is placed in the parent div.</p>
      {createPortal(
        <p>This child is placed in the document body</p>,
        document.body
      )}
    </div>
  )
}

export default SimpleComponent;