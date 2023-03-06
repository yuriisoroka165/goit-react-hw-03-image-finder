import css from "./Modal.module.css";
import { Component } from "react";

class Modal extends Component {


    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);

    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = event => {
        if (event.code === "Escape") {
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
         this.props.onClose();
         console.log("ok");
    };

    render() {
        const { image, description } = this.props;
        return (
            <div className={css.overlay}>
                <div className={css.modal}>
                    <img src={image} alt={description} />
                </div>
            </div>
        );
    }
}

export default Modal;
