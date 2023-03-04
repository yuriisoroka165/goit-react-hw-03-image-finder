import css from "./Loader.module.css";
import { ImSpinner } from "react-icons/im";

const Loader = () => {
    return <ImSpinner size="32" className={css.icon_spin} />;
};

export default Loader;