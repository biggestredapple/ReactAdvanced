import React from "react";
import { Link } from "react-router-dom";

import { ModalComponent, SimpleComponent } from "../../components/Portal";

const PortalPage = () => {
  return (
    <div className="container flex-col justify-center mx-auto px-4 py-4 mt-6">
      <Link to="/" className="btn absolute">Back</Link>
      <div className="flex justify-center">
        <h1 className="flex text-4xl text-center font-bold">Portal</h1>
      </div>
      <div className="flex mt-6">
        <div className="flex-col justify-center">
          <h2 className="text-2xl text-center">Rendering to a different part of the DOM </h2>
          <p className="text-lg p-4 italic text-justify">
            Portals let your components render some of their children into a different place in the DOM.
            This lets a part of your component “escape” from whatever containers it may be in.
            For example, a component can display a modal dialog or a tooltip that appears above and outside of the rest of the page.
          </p>
          <SimpleComponent />
        </div>
        <div className="flex-col justify-ceter">
          <h2 className="text-2xl text-center">Rendering a modal dialog with a portal </h2>
          <p className="text-lg p-4 italic text-justify">
            You can use a portal to create a modal dialog that floats above the rest of the page,
            even if the component that summons the dialog is inside a container with `overflow:` hidden or other styles that interfere with the dialog.
            In this example, the two containers have styles that disrupt the modal dialog,
            but the one rendered into a portal is unaffected because, in the DOM, the modal is not contained within the elements rendered by its parents.
          </p>
          <ModalComponent />
        </div>
      </div>
    </div>
  )
}

export default PortalPage;