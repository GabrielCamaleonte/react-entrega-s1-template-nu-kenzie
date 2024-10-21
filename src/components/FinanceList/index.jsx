import { FinanceCard } from "./FinanceCard";
import styles from "./style.module.scss";

export const FinanceList = ({ transactions,setTransactions }) => {
    
    return (
        <div>
            <h1 className="title-3">
                Resumo financeiro
            </h1>
            <div className={styles.div__ul}>
                <ul>
                    {transactions.map ((transaction) => {
                        return(<FinanceCard key={transaction.id} transaction = {transaction} transactions = {transactions} setTransactions = {setTransactions}/>)
                    })}
                </ul>
            </div>
        </div>
    )
}