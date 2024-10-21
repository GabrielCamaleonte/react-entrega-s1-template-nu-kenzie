import { Finances } from "../../components/Finances";
import { Header } from "../../components/Header";
import { Total } from "../../components/Total";
import { useState } from "react";

export const HomePage = () => {
    const [transactions, setTransactions] = useState([]);
    return(
        <>
            <Header />
            <main>
                <Finances transactions = {transactions} setTransactions = {setTransactions}/>
                <Total transactions = {transactions}/>
            </main>
        </>
    )
}