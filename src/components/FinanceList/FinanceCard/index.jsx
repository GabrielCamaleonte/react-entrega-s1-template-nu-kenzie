import styles from "./style.module.scss"

export const FinanceCard = ({ transaction, transactions, setTransactions }) => {
    // Função para remover transação
    const removeTransaction = (id) => {
        const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
        setTransactions(updatedTransactions);
    };
    return (
        <li className={transaction.type == "entrada" ? styles.li__entrada : styles.li__despesa}>
            <div className={styles.div__descripition}>
                <h3 className="title-3">
                    {transaction.description}
                </h3>
                <span className="body">
                    {transaction.type}
                </span>
            </div>
            <div className={styles.div__value}>
                <p className="body">
                    R$ {transaction.amount}
                </p>
                <button className="btn" onClick={() => removeTransaction(transaction.id)}>
                    Excluir
                </button>
            </div>
        </li>
    )
}