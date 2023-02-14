
type Props = {
  onClose: any
}

const ModalContentComponent: React.FC<Props> = ({ onClose }) => {

  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={onClose} className="btn">Close</button>
    </div>
  )
}

export default ModalContentComponent;