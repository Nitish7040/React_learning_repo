// use of useid hook

import React, { useId } from 'react'


function Input({
    label,
    amount,
    onAmountChange,
    onCureencyChange,
    currencyOption =[],
    selectCurrency ="usd",
    amountdisable= false,
    currencydisable=false,
    
    className = "",
}) {
   
    const amountInputId= useId();
 
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                 //use of useid hook
                   { label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountdisable}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"

                    value={selectCurrency}
                    onCureencyChange={(e)=> onCureencyChange && onCureencyChange(e.target.value)}
                    disabled={currencydisable}
                    
                >
                    // always use key in loopd for react 
                    // ALways use ID's for key in case of Database 

                      {currencyOption.map((Currency)=>(
                         <option key={Currency}  value={Currency}>
                         {Currency}
                     </option>
                    ))}
               
                       
                
                </select>
            </div>
        </div>
    );
}

export default Input;
