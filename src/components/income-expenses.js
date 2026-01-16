import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export let BudgetTracker = ()=>{
  let [totIncome, setTotIncome] = useState(0);
  let [totExpenses, setTotExpenses] = useState(0);
  let [balance, setBalance] = useState(0);
  let addIncome = (amt)=>{
      if(amt.length ==0 || Number(amt) <= 0) toast("Invalid Income Amount");
      else
      setTotIncome(totIncome + Number(amt));
  }
  let addExpenses = (amt)=>{
       
      if(amt.length ==0 || Number(amt) <= 0) toast("Invalid expense amount")
      else
      setTotExpenses(totExpenses + Number(amt));
  }
  useEffect(()=>{
        setBalance(totIncome - totExpenses);
  }, [totIncome, totExpenses]);

 return(<article className="bg-warning p-2 m-2">
            <h1>Budget Tracker</h1>
            <hr/>
            <section className="d-flex gap-3 justify-content-center">
                <Income onAddIncome={addIncome}/>
                <Expenses onAddExpenses={addExpenses}/>
            </section>
            <Summary tincome={totIncome} texpenses={totExpenses} balance={balance}/>
 </article>);
}

export let Income = (props)=>{
    let [income, setIncome] = useState('');
    return(<div className="bg-primary text-white p-2">
         <h3>Add Income</h3>
         <div><input type="number" value={income} onChange={e=>setIncome(e.target.value)}/></div>
         <div><button onClick={()=>{props.onAddIncome(income);setIncome('');}}>Add Income</button></div>
    </div>);
}

export let Expenses = (props)=>{
    let [expense, setExpense] = useState('');
       return(<div className="bg-primary text-white p-2">
         <h3>Add Expenses</h3>
         <div><input type="number" value={expense} onChange={e=>setExpense(e.target.value)}/></div>
         <div><button onClick={()=>{props.onAddExpenses(expense);setExpense('')}}>Add Expenses</button></div>
    </div>);
}

export let Summary = ({tincome, texpenses, balance})=>{
   return(<div className="bg-success text-white p-2 m-2">
          <h3>Summary</h3>
          <section className="d-flex gap-4 justify-content-center">
              <div>
                <div>Total Income</div>
                <div>${Number(tincome).toFixed(2)}</div>
              </div>
              <div>
                <div>Total Expenses</div>
                <div>${Number(texpenses).toFixed(2)}</div>
              </div>
              <div>
                <div>Balance</div>
                <div>${Number(balance).toFixed(2)}</div>
              </div>
          </section>
   </div>);
}

