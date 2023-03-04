import css from "./Modal.module.css";

const Modal = ({ image, description }) => {
    return (
        <div class={css.oberlay}>
            <div className={css.modal}>
                <img src={image} alt={description} />
            </div>
        </div>
    );
};

export default Modal;
