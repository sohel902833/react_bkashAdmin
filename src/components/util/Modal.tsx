interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  title: string | boolean;
}

const Modal: React.FC<Props> = ({ open, setOpen, children, title }) => {
  return (
    <>
      <input
        checked={open}
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setOpen(false)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {title && <h3 className="text-lg font-bold">{title}</h3>}

          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
