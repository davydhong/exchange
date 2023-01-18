import React, { useState } from 'react';
import { ExchangeRate } from './exchangeRates';
import styled from 'styled-components';

interface Props {
    exchangeRates: ExchangeRate[];
    onConvert: (amount: number, selectedCurrency: ExchangeRate) => void;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const StyledLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 1.2rem;
  margin-bottom: 10px;
  border-radius: 5px;
  
`;

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 1.2rem;
  margin-bottom: 10px;
  border-radius: 5px;
  
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3e8e41;
  }
`;

const CurrencyForm: React.FC<Props> = ({ exchangeRates, onConvert }) => {
    const [amount, setAmount] = useState<number>(0);
    const [selectedCurrency, setSelectedCurrency] = useState<ExchangeRate>(exchangeRates[0]);

    return (
        <StyledForm>
            <StyledLabel>
                Amount in CZK:
                <StyledInput type="number" value={amount} onChange={e => setAmount(parseFloat(e.target.value))} />
            </StyledLabel>
            <StyledLabel>
                Select Currency:
                <StyledSelect value={selectedCurrency.code} onChange={e => setSelectedCurrency(exchangeRates.find(rate => rate.code === e.target.value))}>
                    <option value="" disabled>Select a currency</option>
                    {exchangeRates.map(rate => (
                        <option key={rate.code} value={rate.code}>{rate.code}</option>
                    ))}
                </StyledSelect>
            </StyledLabel>
            <StyledButton onClick={() => onConvert(amount, selectedCurrency)}>Convert</StyledButton>
            <br />
            {selectedCurrency && <p>{amount} CZK is equal to {(amount * selectedCurrency.rate).toFixed(2)} {selectedCurrency.code}</p>}
        </StyledForm >
    );
}

export default CurrencyForm;
