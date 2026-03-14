import style from "./modal.module.css";

export default function Modal() {
    return (
        <div className={style.modal}>
            <p>email or password is incorrect</p>
            <p>Please try again</p>
        </div>
    );
}