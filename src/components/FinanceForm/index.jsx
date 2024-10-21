import { useState } from "react"
import styles from "./style.module.scss"

export const FinanceForm = ({ setTransactions }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');

    // Função para adicionar transação
    const addTransaction = () => {
        if (description && amount) {
            const newTransaction = {
                id: Math.random(), // Gera um ID único
                description,
                amount: parseFloat(amount),
                type,
            };
            setTransactions((transactions) => [...transactions, newTransaction]);
            setDescription('');
            setAmount('');
            setType('')
            console.log(newTransaction)
        }
    };



    return (
        <div className={styles.border}>
            <form>
                <div className={styles.description}>
                    <h4 className="body">Descrição</h4>
                    <input
                        type="text"
                        placeholder="Digite aqui sua descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required />
                    <p className="body">Ex: Compra de roupas</p>
                </div>
                <div className={styles.value}>
                    <h4 className="body">Valor (R$)</h4>
                    <input
                        type="number"
                        placeholder="1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required />
                    <p className="body">Tipo de valor</p>
                    <select
                        name="typeValue"
                        id="typeValue"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option value="">Selecione uma categoria</option>
                        <option value="entrada">Entrada</option>
                        <option value="despesa">Despesa</option>
                    </select>
                </div>
                <button type="submit" className={styles.button} onClick={addTransaction}>
                    <p className="headline">Inserir valor</p>
                </button>
            </form>
        </div>

    )
}