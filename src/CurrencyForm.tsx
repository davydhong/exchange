import React, { useState } from 'react';
import { ExchangeRate } from './exchangeRates';

interface Props {
    exchangeRates: ExchangeRate[];
    onConvert: (amount: number, selectedCurrency: ExchangeRate) => void;
}

const CurrencyForm: React.FC<Props> = ({ exchangeRates, onConvert }) => {
    const [amount, setAmount] = useState<number>(0);
    const [selectedCurrency, setSelectedCurrency] = useState<ExchangeRate>(exchangeRates[0]);

    return (
        <form>
            <label>
                Amount in CZK:
                <input type="number" value={amount} onChange={e => setAmount(parseFloat(e.target.value))} />
            </label>
            <br />
            <label>
                Select Currency:
                <select value={selectedCurrency.code} onChange={e => setSelectedCurrency(exchangeRates.find(rate => rate.code === e.target.value))}>
                    <option value="" disabled>Select a currency</option>
                    {exchangeRates.map(rate => (
                        <option key={rate.code} value={rate.code}>{rate.code}</option>
                    ))}
                </select>
            </label>
            <br />
            <button onClick={() => onConvert(amount, selectedCurrency)}>Convert</button>
            <br />
            {selectedCurrency && <p>{amount} CZK is equal to {(amount * selectedCurrency.rate).toFixed(2)} {selectedCurrency.code}</p>}
        </form >
    );
}

export default CurrencyForm;
