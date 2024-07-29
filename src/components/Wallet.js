import React, {useState } from "react"; 

function Wallet({addMoney }) {
    const [amount, setAmount ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addMoney(amount);
        setAmount("");
    }
    return (
        <form onSubmit = {handleSubmit} >
            <input 
                type = "number"
                value = {amount}
                onChange = {(e) => setAmount(e.target.value)}
                placeholder="Add money"
            />
        <button type = "submit" >Add to Wallet </button>
        </form>
    )
}

export default Wallet;