import styles from './styles.module.css'

export const Buttons = ({children,type}) => {
    return(
        <button className={styles.button}  type={type}>
            {children}
    </button>
    )
}