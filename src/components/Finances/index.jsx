import { FinanceForm } from "../FinanceForm"
import { FinanceList } from "../FinanceList"
import styles from "./style.module.scss"
import { useState } from "react"

export const Finances = ( { transactions, setTransactions } ) => {
    

    

    return (
        <section className={styles.financesConatiner}>
            <FinanceForm setTransactions = {setTransactions}/>
            <FinanceList transactions = {transactions} setTransactions={setTransactions}/>
        </section>
    )
}