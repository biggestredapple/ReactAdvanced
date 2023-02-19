import NoPortalComponent from "./NoPortal";
import PortalComponent from "./Portal";


const ModalComponent = () => {

  return (
    <div className="flex mt-6 justify-center item-center">
      <div>
        <NoPortalComponent />
      </div>
      <div>
        <PortalComponent />
      </div>
    </div>
  )
}

export default ModalComponent;