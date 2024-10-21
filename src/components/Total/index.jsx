import styles from "./style.module.scss"

export const Total = ({ transactions }) => {
    const total = transactions.reduce((acc, transaction) => {
        return transaction.type === 'entrada'
          ? acc + transaction.amount
          : acc - transaction.amount;
      }, 0);
    return (
        <section className={styles.container}>
            <div className={styles.div__valor}>
                <h2 className="title-3">
                    Valor total:
                </h2>
                <p className="body">
                    O valor se refere ao saldo
                </p>
            </div>
            <div>
                <h3 className="title-3">
                    R$ {total}
                </h3>
            </div>
        </section>
    )
}