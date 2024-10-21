import styles from "./style.module.scss"
import kenzie from "../../assets/kenzie-icon.jpg"

export const Header = () => {
    return(
        <header className={styles.container}>
            <button>
                <img src={kenzie} alt="Logo" />
            </button>
        </header>
    )
}