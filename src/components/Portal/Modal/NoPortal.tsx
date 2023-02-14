import { useState } from "react";

import ModalContent from "./ModalContent";

const NoPortalComponent = () => {

  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setShowModal(true)} className="btn">Show modal without a portal</button>
      {showModal && (
        <ModalContent onClose={() => setShowModal(false)} />
      )}
    </>
  )
}

export default NoPortalComponent;